import { readFile, readdir } from 'node:fs/promises';
import { resolve, basename } from 'node:path';
import { parse } from 'yaml';
export async function collection(collectionName) {
  const root = resolve('src/content', collectionName);
  const names = (await readdir(root)).filter((n) => n.endsWith('.md'));
  return Promise.all(
    names.map(async (name) => {
      const raw = await readFile(resolve(root, name), 'utf8');
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
      if (!m) throw Error(`${name}: Markdown frontmatter required`);
      return {
        id: basename(name, '.md'),
        data: ['projects', 'publications', 'blog'].includes(collectionName)
          ? { draft: true, ...parse(m[1]) }
          : parse(m[1]),
        body: m[2],
        file: resolve(root, name),
      };
    }),
  );
}
