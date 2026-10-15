import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { resolve, extname, join } from 'node:path';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2',
};
export async function startServer(directory = 'dist', port = 0) {
  const root = resolve(directory);
  const server = createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
      let file = resolve(root, '.' + pathname);
      if (file !== root && !file.startsWith(root + '/')) {
        res.writeHead(403);
        res.end();
        return;
      }
      let status = 200;
      try {
        if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
        await stat(file);
      } catch {
        file = join(root, '404.html');
        status = 404;
      }
      const data = await readFile(file);
      res.writeHead(status, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('Unable to serve file');
    }
  });
  await new Promise((yes, no) => {
    server.once('error', no);
    server.listen(port, '127.0.0.1', yes);
  });
  return { server, url: `http://127.0.0.1:${server.address().port}` };
}
