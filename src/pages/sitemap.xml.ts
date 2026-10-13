import type { APIRoute } from 'astro';
import { projects, projectUrl, posts, postUrl } from '../lib/content';
export const GET: APIRoute = async ({ site }) => {
  const paths = [
    '/',
    '/research/',
    '/personal-projects/',
    '/blog/',
    '/cv/',
    ...(await projects()).map((p) => projectUrl(p.id)),
    ...(await posts()).map((p) => postUrl(p.id)),
  ];
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      paths.map((path) => `<url><loc>${new URL(path, site)}</loc></url>`).join('') +
      '</urlset>',
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
