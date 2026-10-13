import { startServer } from './server.mjs';
const { url } = await startServer('dist', Number(process.env.PORT ?? 4321));
console.log(`Release preview: ${url}`);
