// Print local NETLIFY_DATABASE_URL from `netlify database status` (requires netlify dev running).
import { spawnSync } from 'node:child_process';

const r = spawnSync('netlify', ['database', 'status'], {
  encoding: 'utf8',
  shell: process.platform === 'win32',
});
const out = (r.stdout || '') + (r.stderr || '');
const m =
  out.match(/use the connection string:\s*(postgres:\/\/[^\s]+)/i) ||
  out.match(/database branch:\s*(postgres:\/\/[^\s]+)/i);
if (!m) {
  console.error('Could not parse database URL. Is netlify dev running?');
  console.error(out.slice(0, 500));
  process.exit(1);
}
let url = m[1].trim();
if (url.startsWith('postgres://')) url = url.replace('postgres://', 'postgresql://');
process.stdout.write(url);
