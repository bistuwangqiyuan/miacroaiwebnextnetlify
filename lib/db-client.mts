import { neon } from '@netlify/neon';
import fs from 'node:fs';
import path from 'node:path';
import pg from 'pg';

type SqlFn = {
  (query: string, params?: unknown[]): Promise<unknown[]>;
  (strings: TemplateStringsArray, ...values: unknown[]): Promise<unknown[]>;
};

function resolveDatabaseUrl(): string | undefined {
  const roots = [
    process.cwd(),
    path.join(process.cwd(), '..'),
    path.join(process.cwd(), '../..'),
    path.join(process.cwd(), '../../..'),
  ];
  for (const root of roots) {
    try {
      const local = fs.readFileSync(path.join(root, '.netlify/db-url'), 'utf8').trim();
      if (/postgres/.test(local) && isLocalUrl(local)) return normalizeUrl(local);
    } catch {
      /* ignore */
    }
  }

  const fromNetlify = Netlify.env.get('NETLIFY_DATABASE_URL');
  if (fromNetlify) return normalizeUrl(fromNetlify);
  if (process.env.NETLIFY_DATABASE_URL) return normalizeUrl(process.env.NETLIFY_DATABASE_URL);

  for (const root of roots) {
    try {
      const raw = fs.readFileSync(path.join(root, '.env'), 'utf8');
      const m = raw.match(/^NETLIFY_DATABASE_URL=(.+)$/m);
      if (m) return normalizeUrl(m[1].trim());
    } catch {
      /* ignore */
    }
  }
  return undefined;
}

function normalizeUrl(url: string): string {
  if (url.startsWith('postgres://')) return url.replace('postgres://', 'postgresql://');
  return url;
}

function isLocalUrl(url: string): boolean {
  return /localhost|127\.0\.0\.1/.test(url);
}

async function runPg(connectionString: string, text: string, params: unknown[] = []) {
  const client = new pg.Client({ connectionString });
  await client.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } finally {
    await client.end();
  }
}

function localPgSql(connectionString: string): SqlFn {
  const fn = async (stringsOrQuery: string | TemplateStringsArray, ...values: unknown[]) => {
    if (typeof stringsOrQuery === 'string') {
      const params = (values[0] as unknown[]) ?? [];
      return runPg(connectionString, stringsOrQuery, params);
    }
    let text = '';
    stringsOrQuery.forEach((part, i) => {
      text += part;
      if (i < values.length) text += `$${i + 1}`;
    });
    return runPg(connectionString, text, values);
  };
  return fn as SqlFn;
}

export function getSql(): SqlFn {
  const url = resolveDatabaseUrl();
  if (url && isLocalUrl(url)) return localPgSql(url);
  return (url ? neon(url) : neon()) as SqlFn;
}
