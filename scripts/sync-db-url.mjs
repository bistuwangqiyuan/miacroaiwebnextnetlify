// Write .netlify/db-url (UTF-8, no BOM) for local netlify dev + pg fallback.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const r = spawnSync('node', ['scripts/get-db-url.mjs'], { cwd: ROOT, encoding: 'utf8' });
if (r.status !== 0) process.exit(r.status ?? 1);
const url = (r.stdout || '').trim();
const out = path.join(ROOT, '.netlify', 'db-url');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, url, 'utf8');
console.log(`Wrote ${out}: ${url}`);
