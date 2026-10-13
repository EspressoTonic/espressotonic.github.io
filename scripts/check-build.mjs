import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parseHTML } from 'linkedom';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { collection } from './read-content.mjs';
async function files(dir) {
  const all = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    if ((await stat(p)).isDirectory()) all.push(...(await files(p)));
    else all.push(p);
  }
  return all;
}
export async function checkBuild() {
  const root = resolve('dist');
  const all = await files(root);
  const html = all.filter((p) => p.endsWith('.html'));
  const issues = [];
  const projects = await collection('projects');
  const blog = await collection('blog');
  for (const p of projects) {
    const route = join(root, 'projects', p.id, 'index.html');
    const exists = all.includes(route);
    if (exists === p.data.draft) issues.push(`${p.id}: published/draft route invariant failed`);
  }
  for (const post of blog) {
    const exists = all.includes(join(root, 'blog', post.id, 'index.html'));
    if (exists === post.data.draft)
      issues.push(`${post.id}: article published/draft route invariant failed`);
  }
  if (!all.includes(join(root, 'blog/index.html'))) issues.push('Blog index is missing');
  const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
  for (const p of projects.filter((p) => p.data.draft))
    if (sitemap.includes(`/projects/${p.id}/`)) issues.push(`Draft in sitemap: ${p.id}`);
  for (const post of blog.filter((post) => post.data.draft))
    if (sitemap.includes(`/blog/${post.id}/`)) issues.push(`Draft article in sitemap: ${post.id}`);
  for (const file of html) {
    const source = await readFile(file, 'utf8');
    const { document } = parseHTML(source);
    if (document.querySelectorAll('h1').length !== 1) issues.push(`${file}: needs exactly one H1`);
    if (!document.querySelector('main')) issues.push(`${file}: missing main`);
    for (const group of document.querySelectorAll('.social-group')) {
      if (group.querySelector('a,button,[role=link],[tabindex],[onclick]'))
        issues.push(`${file}: current SNS labels must be noninteractive`);
      const labels = [...group.querySelectorAll('li')].map((item) => item.textContent.trim());
      if (labels.join('|') !== 'LinkedIn|Instagram|X|Threads')
        issues.push(`${file}: unexpected SNS labels`);
    }
    if (file === join(root, 'cv/index.html') && document.querySelector('.social-group'))
      issues.push('CV contains inactive SNS labels');
    if (/cdn\.tailwindcss\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(source))
      issues.push(`${file}: remote design font/runtime dependency`);
    if (document.querySelector('.draft-notice')) issues.push(`${file}: draft notice in production`);
    for (const el of document.querySelectorAll('[href],[src],[srcset]')) {
      const attributes = ['href', 'src'].map((a) => el.getAttribute(a)).filter(Boolean);
      if (el.hasAttribute('srcset'))
        attributes.push(
          ...el
            .getAttribute('srcset')
            .split(',')
            .map((s) => s.trim().split(/\s+/)[0]),
        );
      for (const value of attributes) {
        if (!value || value === '#') {
          issues.push(`${file}: empty/placeholder link`);
          continue;
        }
        if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
        const relative = '/' + file.slice(root.length + 1).replace(/index\.html$/, '');
        const target = new URL(value, 'https://local.test' + relative);
        let path = join(root, decodeURIComponent(target.pathname));
        try {
          if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
          await stat(path);
          if (target.hash && path.endsWith('.html')) {
            const { document: other } = parseHTML(await readFile(path, 'utf8'));
            if (!other.getElementById(decodeURIComponent(target.hash.slice(1))))
              issues.push(`${file}: missing fragment ${value}`);
          }
        } catch {
          issues.push(`${file}: broken local resource ${value}`);
        }
      }
    }
  }
  const pdf = await readFile(join(root, 'files/woo-young-cho-cv.pdf'));
  if (pdf.subarray(0, 5).toString() !== '%PDF-') issues.push('CV download is not a PDF');
  const loading = getDocument({ data: new Uint8Array(pdf), useSystemFonts: true });
  const document = await loading.promise;
  let extracted = '';
  for (let i = 1; i <= document.numPages; i++) {
    extracted +=
      (await (await document.getPage(i)).getTextContent()).items
        .map((item) => item.str ?? '')
        .join(' ') + '\n';
  }
  for (const required of ['Woo Young Cho', 'Arontier', 'Connectagen', 'M.Sc. Bioinformatics'])
    if (!extracted.includes(required)) issues.push('PDF missing expected content: ' + required);
  const cv = (await collection('cv'))[0];
  for (const language of cv.data.languages ?? [])
    if (!extracted.includes(language)) issues.push('PDF missing language: ' + language);
  for (const id of cv.data.selectedPublicationIds) {
    const output = (await collection('publications')).find((item) => item.id === id);
    if (!output) issues.push('PDF publication reference missing: ' + id);
    else
      for (const author of output.data.authors)
        if (!extracted.includes(author)) issues.push('PDF missing source author: ' + author);
  }
  const pdfLinks = [];
  for (let i = 1; i <= document.numPages; i++)
    pdfLinks.push(
      ...(await (await document.getPage(i)).getAnnotations())
        .filter((a) => a.subtype === 'Link')
        .map((a) => a.url ?? a.unsafeUrl ?? ''),
    );
  if (pdfLinks.some((url) => /localhost|127\.0\.0\.1/.test(url)))
    issues.push('PDF has local preview link targets');
  console.log(`PDF text verified: ${document.numPages} pages.`);
  await loading.destroy();
  if (issues.length) throw Error(issues.join('\n'));
  console.log(
    `Built artifact valid: ${html.length} HTML pages, local links/images/fragments and PDF checked.`,
  );
}
if (process.argv[1]?.endsWith('check-build.mjs')) await checkBuild();
