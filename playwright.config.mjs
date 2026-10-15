import { defineConfig } from '@playwright/test';
const port = Number(process.env.SITE_TEST_PORT ?? 4322);
const baseURL = `http://127.0.0.1:${port}`;
export default defineConfig({
  testDir: './tests',
  testMatch: 'site.spec.ts',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: { baseURL },
  webServer: {
    command: `PORT=${port} node scripts/serve.mjs`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 30000,
  },
});
