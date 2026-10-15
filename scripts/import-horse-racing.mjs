import { readFile, writeFile, mkdir, cp, rm, rename, mkdtemp } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import {
  demoPath,
  publicFile,
  sha256,
  verifyRelease,
  verifyInstalled,
} from './horse-racing-release.mjs';
const source = resolve(process.argv[2] ?? 'missing-release-directory');
const approve = process.argv.includes('--approve-source');
const sourceBytes = await readFile(join(source, 'release.json'));
const original = JSON.parse(sourceBytes);
await verifyRelease(source, original);
const manifest = {
  schema_version: 1,
  source_release: source.split('/').at(-1),
  source_manifest_sha256: sha256(sourceBytes),
  source_commit: original.source_commit,
  exported_at: original.exported_at,
  research_run: original.research_run,
  weekly_run: original.weekly_run,
  source_files: original.source_files,
  files: Object.fromEntries(Object.entries(original.files).filter(([name]) => publicFile(name))),
};
if (approve) {
  await mkdir('config', { recursive: true });
  await writeFile(
    'config/horse-racing-source.json',
    JSON.stringify({ source_files: original.source_files }, null, 2) + '\n',
  );
} else {
  const current = await verifyInstalled();
  if (JSON.stringify(current.manifest.source_files) !== JSON.stringify(manifest.source_files))
    throw Error('Source changes require a reviewed import with --approve-source');
  const immutable = (files) =>
    Object.fromEntries(Object.entries(files).filter(([name]) => name !== 'data/dashboard.json'));
  if (
    JSON.stringify(immutable(current.manifest.files)) !== JSON.stringify(immutable(manifest.files))
  )
    throw Error('Compiled asset changes require review');
  if (Date.parse(manifest.exported_at) < Date.parse(current.manifest.exported_at))
    throw Error('Refusing an older snapshot');
}
// Stage and verify before replacing the bounded destination; never copy arbitrary bundle extras.
await mkdir('public/demos', { recursive: true });
const stage = await mkdtemp('public/demos/.horse-racing-');
try {
  for (const name of Object.keys(manifest.files)) {
    const target = join(stage, name);
    await mkdir(resolve(target, '..'), { recursive: true });
    await cp(join(source, name), target);
  }
  await writeFile(join(stage, 'release.json'), JSON.stringify(manifest, null, 2) + '\n');
  await verifyRelease(stage, manifest, { exact: true });
  await rm(demoPath, { recursive: true, force: true });
  await rename(stage, demoPath);
} finally {
  await rm(stage, { recursive: true, force: true });
}
await verifyInstalled();
console.log(
  `Imported verified horse-racing snapshot ${manifest.source_release} (${manifest.exported_at})`,
);
