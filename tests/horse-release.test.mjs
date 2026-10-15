import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, mkdir, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  sha256,
  verifyRelease,
  publicFile,
  verifyInstalled,
} from '../scripts/horse-racing-release.mjs';
test('Release boundary rejects traversal, credentials and extra executable paths', () => {
  for (const name of [
    '../index.html',
    '/index.html',
    '.env',
    'data/raw.json',
    'assets/sub/file.js',
    'assets/app.js.map',
    '.github/workflows/pages.yml',
  ])
    assert.equal(publicFile(name), false);
});
test('Installed bundle, data and approved source hashes agree', async () => {
  await verifyInstalled();
});
test('Tampered files and symlinked parents fail closed', async () => {
  const root = await mkdtemp(join(tmpdir(), 'portfolio-release-'));
  try {
    await mkdir(join(root, 'assets'));
    await writeFile(join(root, 'assets/app.js'), '');
    await mkdir(join(root, 'data'));
    await writeFile(join(root, 'data/dashboard.json'), '{}');
    await writeFile(join(root, 'index.html'), 'tampered');
    const manifest = {
      files: {
        'index.html': sha256('expected'),
        'assets/app.js': sha256(''),
        'data/dashboard.json': sha256('{}'),
      },
    };
    await assert.rejects(verifyRelease(root, manifest), /hash mismatch/);
    await writeFile(join(root, 'index.html'), 'expected');
    await rm(join(root, 'assets'), { recursive: true });
    await symlink(root, join(root, 'assets'));
    await assert.rejects(verifyRelease(root, manifest), /Symlink/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
