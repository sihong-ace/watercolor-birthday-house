import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.txt': 'text/plain; charset=utf-8', '.json':'application/json; charset=utf-8', '.mp3':'audio/mpeg', '.m4a':'audio/mp4', '.woff2':'font/woff2', '.ttf':'font/ttf' };
const server = http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); } catch { response.writeHead(400); response.end(); return; }
  const target = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!target.startsWith(path.resolve(root) + path.sep)) { response.writeHead(403); response.end(); return; }
  fs.readFile(target, (error, data) => {
    if (error) { response.writeHead(404); response.end('File not found'); return; }
    response.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');
    response.setHeader('Cache-Control', 'no-cache'); response.end(data);
  });
});
server.on('error', error => { console.error(`无法启动预览：${error.message}`); process.exitCode = 1; });
server.listen(5175, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:5175'));
