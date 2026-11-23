// IndexNow ping after a deploy (Jack, 23 Nov 2026: Bing had indexed about 29 of 119 pages).
// Usage: node scripts/indexnow.mjs <previous build dir> <new build dir>
// Compares the two builds page by page (sitemap pages only, so noindexed pages are never sent),
// waits until the live site serves the new build, then sends the changed URLs to IndexNow
// (Bing, Yandex, Seznam, Naver; Bing passes them to Copilot and ChatGPT search).
// Never fails the workflow: problems are reported as warnings.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const KEY = '5faa34f2581159862def8def7becb778';
const HOST = 'creditrights.co.uk';
const [prevDir, newDir] = process.argv.slice(2);
const warn = (m) => console.log(`::warning title=IndexNow::${m}`);

// Built asset names change on every style edit; strip them so only real content changes count.
const norm = (html) => html.replace(/\/_astro\/[^"')\s]+/g, '/_astro/x');
const fileFor = (dir, url) => join(dir, new URL(url).pathname, 'index.html');

const sitemap = readFileSync(join(newDir, 'sitemap-0.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const changed = urls.filter((u) => {
  const now = fileFor(newDir, u);
  if (!existsSync(now)) return false;
  const before = prevDir && fileFor(prevDir, u);
  return !before || !existsSync(before) || norm(readFileSync(before, 'utf8')) !== norm(readFileSync(now, 'utf8'));
});
if (!changed.length) { console.log('IndexNow: no page content changed.'); process.exit(0); }
console.log(`IndexNow: ${changed.length} changed page(s):\n${changed.join('\n')}`);

// Wait (up to 15 minutes) until Cloudflare serves the new build of the first changed page and the key file.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const want = norm(readFileSync(fileFor(newDir, changed[0]), 'utf8'));
let live = false;
for (let i = 0; i < 30 && !live; i++) {
  try {
    const [page, key] = await Promise.all([
      fetch(changed[0], { headers: { 'cache-control': 'no-cache' } }).then((r) => r.text()),
      fetch(`https://${HOST}/${KEY}.txt`).then((r) => (r.ok ? r.text() : '')),
    ]);
    live = norm(page) === want && key.trim() === KEY;
  } catch { /* retry */ }
  if (!live) await sleep(30_000);
}
if (!live) warn('the live site did not show the new build within 15 minutes; sending anyway.');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: changed.slice(0, 10000) }),
});
if (res.status === 200 || res.status === 202) console.log(`IndexNow: sent ${changed.length} URL(s), HTTP ${res.status}.`);
else warn(`IndexNow returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
