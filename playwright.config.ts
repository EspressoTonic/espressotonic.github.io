import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: 'site.spec.ts',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4322' },
  webServer: {
    command: 'PORT=4322 node scripts/serve.mjs',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: false,
    timeout: 30000,
  },
});
