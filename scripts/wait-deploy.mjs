// Poll the live site until a new deploy is live, identified by a build fingerprint change.
// Account-independent (does not require Netlify CLI access to the site).
// Usage:
//   node scripts/wait-deploy.mjs --print            -> print current fingerprint and exit
//   node scripts/wait-deploy.mjs --old <fp> [--timeout 900]  -> wait until fingerprint != old
const BASE_URL = process.env.BASE_URL || 'https://miacroai-web-next.netlify.app';

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const v = process.argv[i + 1];
  return v && !v.startsWith('--') ? v : true;
}

async function fingerprint() {
  const res = await fetch(`${BASE_URL}/zh`, {
    headers: { 'cache-control': 'no-cache' },
    redirect: 'follow',
  });
  const html = await res.text();
  const build = html.match(/"b":"([^"]+)"/);
  if (build) return `build:${build[1]}`;
  const chunk = html.match(/\/_next\/static\/chunks\/main-app-([a-z0-9]+)\.js/i);
  if (chunk) return `chunk:${chunk[1]}`;
  // last resort: hash of first 2000 chars
  return `len:${html.length}`;
}

async function apiHealthy() {
  try {
    const res = await fetch(`${BASE_URL}/api/data?page=1&pageSize=1`, { redirect: 'manual' });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  if (arg('print', false)) {
    process.stdout.write(await fingerprint());
    return;
  }
  const old = arg('old', '');
  const timeoutSec = parseInt(arg('timeout', '900'), 10);
  const start = Date.now();
  let last = '';
  while ((Date.now() - start) / 1000 < timeoutSec) {
    const fp = await fingerprint();
    last = fp;
    const healthy = await apiHealthy();
    const elapsed = Math.round((Date.now() - start) / 1000);
    if (fp && fp !== old) {
      console.log(`[wait-deploy] new deploy live after ${elapsed}s (fp=${fp}, apiHealthy=${healthy})`);
      // give CDN a moment to fully propagate functions
      await new Promise((r) => setTimeout(r, 5000));
      return;
    }
    console.log(`[wait-deploy] still old (${elapsed}s) fp=${fp} apiHealthy=${healthy}`);
    await new Promise((r) => setTimeout(r, 15000));
  }
  console.error(`[wait-deploy] timed out after ${timeoutSec}s; last fp=${last}`);
  process.exit(1);
}

main();
