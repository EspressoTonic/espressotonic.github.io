import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { collection } from '../scripts/read-content.mjs';
interface SourceProject {
  id: string;
  data: { draft: boolean; category: 'research' | 'personal' };
}
const records = (await collection('projects')) as SourceProject[];
const released = records.filter((project) => !project.data.draft);
const routes = [
  '/',
  '/research/',
  '/personal-projects/',
  '/blog/',
  '/cv/',
  ...released.map((project) => `/projects/${project.id}/`),
];
for (const route of routes)
  test(`Page and accessibility: ${route}`, async ({ page, baseURL }) => {
    const errors: string[] = [];
    const external: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('requestfailed', (request) =>
      errors.push(request.url() + ': ' + request.failure()?.errorText),
    );
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (request) => {
      if (new URL(request.url()).origin !== new URL(baseURL!).origin) external.push(request.url());
    });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('main h1')).toHaveCount(1);
    expect(await page.title()).toContain('Woo Young Cho');
    await expect(page.locator('main')).not.toBeEmpty();
    await expect(page.locator('.draft-notice,.draft-label')).toHaveCount(0);
    expect(errors).toEqual([]);
    expect(external).toEqual([]);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map((violation) => ({
        id: violation.id,
        description: violation.description,
        nodes: violation.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });
for (const width of [360, 390, 768, 1280, 1440])
  test(`Responsive layout ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        route,
      ).toBeTruthy();
      const nav = page.getByRole('navigation', { name: 'Main navigation' });
      expect(await nav.getByRole('link').allTextContents()).toEqual([
        'Research',
        'Personal Projects',
        'Blog',
        'CV',
      ]);
      for (const link of await nav.getByRole('link').all()) {
        await expect(link).toBeVisible();
        expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
      }
    }
    if (width === 390) {
      await page.goto('/');
      for (const action of await page.locator('.hero .actions a').all())
        expect(
          (await action.boundingBox())!.y + (await action.boundingBox())!.height,
        ).toBeLessThanOrEqual(844);
    }
  });
test('Research, personal projects, full inventory and back-links', async ({ page }) => {
  await page.goto('/research/');
  expect(await page.locator('[data-project-id]').count()).toBe(
    released.filter((project) => project.data.category === 'research').length,
  );
  await page.getByRole('link', { name: 'MAGraph', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'MAGraph', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Back to Research', exact: true }).click();
  await expect(page).toHaveURL(/\/research\/$/);
  await page.goto('/personal-projects/');
  expect(await page.locator('[data-project-id]').count()).toBe(
    released.filter((project) => project.data.category === 'personal').length,
  );
  await page.getByRole('link', { name: 'Location Todo', exact: true }).click();
  await expect(
    page.getByRole('link', { name: 'Back to Personal Projects', exact: true }),
  ).toBeVisible();
  await expect(page.locator('.project-facts')).toContainText('full iOS build pending');
});
test('Homepage curation has one MAGraph feature and six secondary personal links', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.hero-feature')).toContainText('MAGraph');
  await expect(page.locator('.hero-feature a[href="/projects/magraph/"]')).toHaveCount(1);
  await expect(page.locator('.home-section [data-project-id="magraph"]')).toHaveCount(0);
  expect(
    await page
      .locator('.personal-home [data-project-id]')
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-project-id'))),
  ).toEqual(['fridge-match', 'location-todo', 'commute-log']);
  expect(
    await page
      .locator('.secondary-personal a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href'))),
  ).toEqual([
    '/projects/junior/',
    '/projects/lawgpt/',
    '/projects/horse-racing/',
    '/projects/tc-personal-agent/',
    '/projects/nookcam/',
    '/projects/ballet-pose-feedback/',
  ]);
});
test('SNS labels stay noninteractive and CV keeps professional contacts only', async ({ page }) => {
  for (const route of ['/', '/personal-projects/', '/blog/']) {
    await page.goto(route);
    for (const group of await page.locator('.social-group').all()) {
      expect(await group.locator('.social-labels li').allTextContents()).toEqual([
        'LinkedIn',
        'Instagram',
        'X',
        'Threads',
      ]);
      await expect(group.locator('a,button,[role="link"],[tabindex],[onclick]')).toHaveCount(0);
      for (const label of await group.locator('li span').all())
        expect(await label.evaluate((span) => getComputedStyle(span).cursor)).toBe('default');
    }
  }
  await page.goto('/cv/');
  await expect(page.locator('.social-group')).toHaveCount(0);
  await expect(page.locator('.cv-contact a')).toHaveCount(3);
  await expect(
    page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Blog' }),
  ).toBeVisible();
});
test('Blog is a real zero-post route with no invented article links', async ({ page, request }) => {
  await page.goto('/blog/');
  await expect(page.getByRole('heading', { name: 'No posts yet.', exact: true })).toBeVisible();
  await expect(page.locator('.blog-post-list')).toHaveCount(0);
  await expect(page.locator('main a[href^="/blog/"]')).toHaveCount(0);
  const missing = await request.get('/blog/no-such-post/');
  expect(missing.status()).toBe(404);
  const xml = await (await request.get('/sitemap.xml')).text();
  expect(xml).toContain('https://espressotonic.github.io/blog/');
  expect(xml).not.toMatch(/\/blog\/[^<]+/);
});
test('Unverified periods are omitted and prototype limits stay visible', async ({ page }) => {
  for (const id of ['nookcam', 'junior', 'tc-personal-agent']) {
    await page.goto(`/projects/${id}/`);
    expect(await page.locator('.project-facts dt').allTextContents()).not.toContain('Period');
  }
  await page.goto('/projects/ballet-pose-feedback/');
  await expect(page.locator('.project-facts')).toContainText('mock tracking');
  await page.goto('/projects/lawgpt/');
  await expect(page.locator('.project-facts')).toContainText('corpus audit');
});
test('TOC brings the actual source heading into view', async ({ page }) => {
  await page.goto('/projects/magraph/');
  const target = page
    .getByRole('navigation', { name: 'On this page' })
    .getByRole('link', { name: 'Limitations and current stage', exact: true });
  await target.click();
  await expect(
    page.getByRole('heading', { name: 'Limitations and current stage', exact: true }),
  ).toBeInViewport();
});
test('No JavaScript navigation and keyboard focus', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL! + '/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  for (const [name, path] of [
    ['Research', '/research/'],
    ['Personal Projects', '/personal-projects/'],
    ['Blog', '/blog/'],
    ['CV', '/cv/'],
  ]) {
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name, exact: true })
      .click();
    await expect(page).toHaveURL(`${baseURL}${path}`);
  }
  await expect(page.locator('h1')).toHaveText('Woo Young Cho');
  await context.close();
});
test('CV selections remain authored and download is a real PDF', async ({ page }) => {
  await page.goto('/cv/');
  expect(await page.locator('.cv-projects a').allTextContents()).toEqual([
    'MAGraph',
    'EnzymeMatch',
  ]);
  await expect(page.locator('#outputs + .publication-list li')).toHaveCount(3);
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download PDF', exact: true }).click(),
  ]);
  expect(download.suggestedFilename()).toBe('woo-young-cho-cv.pdf');
  expect(await download.failure()).toBeNull();
});
test('Draft routes stay absent and missing paths return the custom 404', async ({ request }) => {
  for (const project of records.filter((entry) => entry.data.draft))
    expect((await request.get(`/projects/${project.id}/`)).status()).toBe(404);
  const missing = await request.get('/no-such-page/');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('This page isn’t here.');
  const xml = await (await request.get('/sitemap.xml')).text();
  for (const project of records.filter((entry) => entry.data.draft))
    expect(xml).not.toContain(`/projects/${project.id}/`);
});
test('Zoom reflow remains readable at a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 800 });
  for (const route of ['/', '/cv/', '/projects/genomycanalyzer/', '/blog/']) {
    await page.goto(route);
    await page.evaluate(() => {
      document.documentElement.style.zoom = '2';
    });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      route,
    ).toBeTruthy();
  }
});

test('Actual detail screenshots preserve readable square and portrait presentations', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/projects/fridge-match/');
  const fridge = await page.locator('.personal-intro img').boundingBox();
  expect(fridge!.width).toBeGreaterThan(400);
  expect(fridge!.height / fridge!.width).toBeGreaterThan(0.98);
  expect(fridge!.height / fridge!.width).toBeLessThan(1.04);
  await page.goto('/projects/location-todo/');
  const phone = await page.locator('.personal-intro img').boundingBox();
  expect(phone!.width).toBeLessThanOrEqual(300);
  expect(phone!.height / phone!.width).toBeGreaterThan(1.8);
});

test('Horse research summary works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/projects/horse-racing/`);
  await expect(page.locator('.horse-evidence')).toContainText('Historical winner hit rate');
  await page.getByRole('link', { name: 'Explore results', exact: true }).click();
  await expect(page.locator('main h1')).toHaveText('Pferderennen research dashboard');
  await page.getByRole('link', { name: 'Back to case study' }).click();
  await expect(page.locator('.horse-evidence')).toBeVisible();
  await context.close();
});
for (const width of [390, 1440])
  test(`Horse dashboard integration ${width}px`, async ({ page, baseURL }) => {
    await page.setViewportSize({ width, height: 950 });
    const errors: string[] = [];
    const dataRequests: string[] = [];
    const external: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('request', (request) => {
      if (request.url().includes('dashboard.json')) dataRequests.push(request.url());
      if (new URL(request.url()).origin !== new URL(baseURL!).origin) external.push(request.url());
    });
    await page.goto('/projects/horse-racing/');
    await page.getByRole('link', { name: 'Explore results', exact: true }).click();
    await expect(page).toHaveTitle('Pferderennen — Woo Young Cho');
    await expect(page.getByLabel('Model', { exact: true })).toBeVisible();
    const choices = await page
      .locator('#model-choice option')
      .evaluateAll((options) => options.map((option) => (option as HTMLOptionElement).value));
    expect(choices.length).toBe(5);
    for (const choice of choices) {
      await page.getByLabel('Model', { exact: true }).selectOption(choice);
      await page.getByRole('button', { name: 'Results', exact: true }).click();
      await expect(page.locator('main h1')).toHaveCount(1);
      await page.getByRole('button', { name: 'Forecasts', exact: true }).click();
    }
    for (const tab of ['Research', 'Simulation', 'Method']) {
      await page.getByRole('button', { name: tab, exact: true }).click();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      ).toBeTruthy();
      const violations = (
        await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      ).violations;
      expect(violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual(
        [],
      );
      if (tab === 'Simulation') {
        await page.getByRole('button', { name: 'Start', exact: true }).click();
        await expect(page.getByTestId('replay-balance')).toHaveText('₩1,000,000');
        await page.getByRole('button', { name: 'End', exact: true }).click();
        await expect(page.getByTestId('replay-balance')).not.toHaveText('₩1,000,000');
      }
    }
    expect(dataRequests).toHaveLength(1);
    expect(external).toEqual([]);
    expect(errors).toEqual([]);
    await page.reload();
    await expect(page.getByRole('button', { name: 'Method', exact: true })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await page.getByRole('link', { name: 'Back to case study' }).click();
    await expect(page.locator('.horse-evidence')).toBeVisible();
  });

test('Recent additions navigate through the right indexes and keep evidence limits visible', async ({
  page,
}) => {
  await page.goto('/');
  const recent = page.getByRole('region', { name: 'Recently added', exact: true });
  expect(
    await recent
      .locator('[data-project-id]')
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-project-id'))),
  ).toEqual(['ai-usage-bar', 'codex-account-switcher', 'genedis']);
  await recent.getByRole('link', { name: 'AI Usage Bar', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'AI Usage Bar', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Source code', exact: true })).toHaveAttribute(
    'href',
    'https://github.com/EspressoTonic/ai_usage_bar',
  );
  await expect(page.locator('main')).toContainText('not a broadly validated binary release');
  await page.getByRole('link', { name: 'Codex Account Switcher', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('Codex Account Switcher');
  await expect(page.locator('main')).toContainText('Live account validation pending');
  await page.getByRole('link', { name: 'Back to Personal Projects', exact: true }).click();
  const tools = page.getByRole('region', { name: 'Developer tools', exact: true });
  await expect(tools.getByRole('link', { name: 'AI Usage Bar', exact: true })).toBeVisible();
  await expect(
    tools.getByRole('link', { name: 'Codex Account Switcher', exact: true }),
  ).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Research', exact: true })
    .click();
  await page.getByRole('link', { name: 'GeNeDis Multi-Omics', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('GeNeDis Multi-Omics');
  await expect(page.locator('main')).toContainText('No final endpoint, trained model');
  await expect(page.getByRole('link', { name: 'Source code', exact: true })).toHaveCount(0);
  await page.getByRole('link', { name: 'JUNIOR', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('JUNIOR');
});
