import { execFileSync } from 'node:child_process';
import { appendFileSync } from 'node:fs';
import { verifyInstalled } from './horse-racing-release.mjs';
const [before, after] = process.argv.slice(2);
if (![before, after].every((value) => /^[a-f0-9]{40}$/.test(value ?? '')))
  throw Error('Expected commit identities');
const allowed = new Set([
  'public/demos/horse-racing/data/dashboard.json',
  'public/demos/horse-racing/release.json',
]);
const files = execFileSync('git', ['diff', '--name-only', before, after], { encoding: 'utf8' })
  .trim()
  .split('\n');
const publish = files.length > 0 && files.every((file) => allowed.has(file));
if (publish) await verifyInstalled();
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `publish=${publish}\n`);
console.log(
  publish
    ? 'Verified data-only delivery; publish after full validation.'
    : 'Code/content change; publication remains manual.',
);
