import { spawnSync } from 'node:child_process';
import { generatePdf } from './generate-cv-pdf.mjs';
import { checkBuild } from './check-build.mjs';
if (process.env.CONTENT_PREVIEW) throw Error('Release builds reject editorial preview flags');
for (const args of [
  ['run', 'check'],
  ['run', 'build'],
]) {
  const r = spawnSync('npm', args, { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
await generatePdf();
await checkBuild();
