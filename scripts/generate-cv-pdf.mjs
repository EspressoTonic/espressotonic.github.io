import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { startServer } from './server.mjs';
export async function generatePdf() {
  const { server, url } = await startServer();
  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url + '/cv/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: 'print' });
    const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
    await page.evaluate((origin) => {
      for (const anchor of document.querySelectorAll('a[href]')) {
        const href = anchor.getAttribute('href');
        if (href?.startsWith('/')) anchor.setAttribute('href', new URL(href, origin).href);
      }
    }, new URL(canonical).origin);
    await mkdir('dist/files', { recursive: true });
    await page.pdf({
      path: 'dist/files/woo-young-cho-cv.pdf',
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: false,
    });
    console.log('Generated PDF from the same built /cv/ page.');
  } finally {
    await browser?.close();
    await new Promise((r) => server.close(r));
  }
}
if (process.argv[1]?.endsWith('generate-cv-pdf.mjs')) await generatePdf();
