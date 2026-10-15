import { readFile, readdir, lstat } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

export const demoPath = 'public/demos/horse-racing';
export const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
export const publicFile = (name) =>
  name === 'index.html' ||
  name === 'data/dashboard.json' ||
  /^assets\/[A-Za-z0-9_-]+\.(js|css|png|svg|webp|woff2|txt)$/.test(name);
export function validateSnapshot(data) {
  if (data.schema_version !== 1 || !Number.isFinite(Date.parse(data.exported_at)))
    throw Error('Invalid snapshot identity');
  if (
    !data.research?.rows?.some((row) => row.id === 'fixed') ||
    !data.weekly?.models?.length ||
    !data.prospective
  )
    throw Error('Incomplete research/weekly evidence');
  if (data.research.papers.comparisons.some((row) => row.direct_superiority_claim !== false))
    throw Error('Unsupported superiority claim');
  if (!data.weekly.models.some((model) => model.id === data.weekly.default_model))
    throw Error('Unknown default model');
  for (const model of data.weekly.models) {
    if (
      !model.version ||
      !Array.isArray(model.forecast.races) ||
      !Number.isInteger(model.backtest.calibrated.races)
    )
      throw Error('Invalid weekly model');
  }
  return data;
}
export async function verifyRelease(directory, manifest, { exact = false } = {}) {
  const names = Object.keys(manifest.files).filter(publicFile).sort();
  if (
    !names.includes('index.html') ||
    !names.includes('data/dashboard.json') ||
    !names.some((name) => name.endsWith('.js'))
  )
    throw Error('Incomplete public bundle');
  for (const name of names) {
    const path = join(directory, name);
    // Check every parent as well as the leaf: no symlink escape from the bundle.
    let cursor = directory;
    for (const part of name.split('/')) {
      cursor = join(cursor, part);
      if ((await lstat(cursor)).isSymbolicLink()) throw Error('Symlink in bundle');
    }
    if (sha256(await readFile(path)) !== manifest.files[name])
      throw Error('Release hash mismatch: ' + name);
  }
  if (exact) {
    async function walk(root, prefix = '') {
      const result = [];
      for (const entry of await readdir(root, { withFileTypes: true })) {
        const name = prefix + entry.name;
        if (entry.isSymbolicLink()) throw Error('Symlink in public demo');
        if (entry.isDirectory()) result.push(...(await walk(join(root, entry.name), name + '/')));
        else result.push(name);
      }
      return result;
    }
    const actual = (await walk(directory)).filter((name) => name !== 'release.json').sort();
    if (JSON.stringify(actual) !== JSON.stringify(names))
      throw Error('Unexpected public demo file');
    if (Object.keys(manifest.files).some((name) => !publicFile(name)))
      throw Error('Nonpublic manifest path');
  }
  return validateSnapshot(
    JSON.parse(await readFile(join(directory, 'data/dashboard.json'), 'utf8')),
  );
}
export async function verifyInstalled(root = '.') {
  const directory = join(root, demoPath);
  const manifest = JSON.parse(await readFile(join(directory, 'release.json'), 'utf8'));
  const approved = JSON.parse(
    await readFile(join(root, 'config/horse-racing-source.json'), 'utf8'),
  );
  if (JSON.stringify(manifest.source_files) !== JSON.stringify(approved.source_files))
    throw Error('Unreviewed exporter/frontend sources');
  const data = await verifyRelease(directory, manifest, { exact: true });
  if (data.exported_at !== manifest.exported_at) throw Error('Snapshot/manifest date mismatch');
  return { manifest, data };
}
