// Start netlify dev with NETLIFY_DATABASE_URL wired for Functions (two-phase boot).
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function getDbUrl() {
  const r = spawnSync('node', ['scripts/get-db-url.mjs'], { cwd: ROOT, encoding: 'utf8' });
  if (r.status !== 0) return null;
  return (r.stdout || '').trim();
}

function upsertEnv(key, value) {
  let text = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf8') : '';
  const line = `${key}=${value}`;
  const re = new RegExp(`^${key}=.*$`, 'm');
  text = re.test(text) ? text.replace(re, line) : `${text.trimEnd()}\n${line}\n`;
  fs.writeFileSync(ENV_PATH, text, 'utf8');
}

async function waitForDevReady(proc, maxSec = 120) {
  const start = Date.now();
  while ((Date.now() - start) / 1000 < maxSec) {
    if (proc.exitCode != null) return false;
    const url = getDbUrl();
    if (url) return url;
    await sleep(3000);
  }
  return null;
}

async function main() {
  console.log('[start-dev] Phase 1: boot netlify dev to start DB proxy...');
  const phase1 = spawn('netlify', ['dev'], {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  const dbUrl = await waitForDevReady(phase1);
  if (!dbUrl) {
    phase1.kill('SIGTERM');
    console.error('[start-dev] Timed out waiting for database URL');
    process.exit(1);
  }

  console.log(`[start-dev] Database URL: ${dbUrl}`);
  phase1.kill('SIGTERM');
  await sleep(4000);

  upsertEnv('NETLIFY_DATABASE_URL', dbUrl);
  console.log('[start-dev] Phase 2: restart netlify dev with NETLIFY_DATABASE_URL in .env');
  const phase2 = spawn('netlify', ['dev'], {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, NETLIFY_DATABASE_URL: dbUrl },
  });
  phase2.on('exit', (code) => process.exit(code ?? 0));
}

main();
