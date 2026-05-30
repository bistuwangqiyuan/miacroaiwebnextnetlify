// Run N rounds of Playwright E2E + append TEST_REPORT.md via gen-report.mjs
// Usage:
//   node scripts/test-cycle.mjs [--rounds 10] [--base-url URL] [--note text] [--commit SHA]
// Env: BASE_URL, ROUNDS (default 10), DEPLOY_COMMIT
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const ROOT = process.cwd();

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
}

function run(cmd, args, extraEnv = {}) {
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, ...extraEnv },
  });
  return r.status ?? 1;
}

const rounds = parseInt(arg('rounds', process.env.ROUNDS || '10'), 10);
const baseUrl = arg('base-url', process.env.BASE_URL || 'https://miacroai-web-next.netlify.app');
const notePrefix = arg('note', process.env.CYCLE_NOTE || '');
const commit = arg('commit', process.env.DEPLOY_COMMIT || 'n/a');

if (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) {
  console.log('[test-cycle] Syncing local .netlify/db-url for pg fallback...');
  const sync = spawnSync('node', ['scripts/sync-db-url.mjs'], { cwd: ROOT, stdio: 'inherit', shell: process.platform === 'win32' });
  if (sync.status !== 0) {
    console.error('[test-cycle] sync-db-url failed (is netlify dev running?)');
    process.exit(1);
  }
}

let failedAt = 0;
for (let i = 1; i <= rounds; i++) {
  const note = notePrefix ? `${notePrefix} round ${i}/${rounds}` : `round ${i}/${rounds}`;
  console.log(`\n========== Test cycle ${i}/${rounds} — ${baseUrl} ==========\n`);

  const testStatus = run(
    'npx',
    ['playwright', 'test', '--workers=1'],
    { BASE_URL: baseUrl }
  );
  if (testStatus !== 0) {
    console.error(`[test-cycle] Playwright failed on round ${i}`);
    failedAt = i;
    break;
  }

  const reportStatus = run('node', [
    'scripts/gen-report.mjs',
    '--round',
    String(i),
    '--commit',
    commit,
    '--note',
    note,
  ], { BASE_URL: baseUrl, DEPLOY_COMMIT: commit });

  if (reportStatus !== 0) {
    console.error(`[test-cycle] Report shows failures on round ${i}`);
    failedAt = i;
    break;
  }
}

if (failedAt) {
  console.error(`[test-cycle] Stopped at round ${failedAt}/${rounds}`);
  process.exit(2);
}
console.log(`[test-cycle] All ${rounds} rounds passed (${baseUrl})`);
process.exit(0);
