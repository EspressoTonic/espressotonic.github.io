#!/usr/bin/env python3
"""Serve retained portfolio design references locally; does not run the Astro app."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

design_root = Path(__file__).resolve().parent
repo = design_root.parents[2]
routes = {
    '/': design_root / 'index.html',
    '/research/': design_root / 'subpages/research.html',
    '/personal-projects/': design_root / 'subpages/personal-projects.html',
    '/cv/': design_root / 'subpages/cv.html',
    '/blog/': design_root / 'subpages/blog.html',
    '/IMPLEMENTATION_PLAN.md': repo / 'docs/IMPLEMENTATION_PLAN.md',
    '/DESIGN.md': repo / 'docs/design/DESIGN.md',
    '/files/woo-young-cho-cv.pdf': repo / 'dist/files/woo-young-cho-cv.pdf',
}
for project in ['magraph', 'enzymematch', 'virtual-cell-challenge', 'genomycanalyzer', 'fridge-match', 'location-todo', 'commute-log', 'junior', 'tc-personal-agent', 'lawgpt', 'nookcam', 'ballet-pose-feedback', 'horse-racing']:
    routes[f'/projects/{project}/'] = design_root / f'subpages/{project}.html'

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        requested = urlsplit(path).path
        return str(routes[requested]) if requested in routes else super().translate_path(path)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4324)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(design_root)))
    print(f'Design gallery: http://127.0.0.1:{args.port}/index.html', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
