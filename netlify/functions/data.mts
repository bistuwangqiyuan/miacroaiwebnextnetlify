import type { Context, Config } from '@netlify/functions';
import { neon } from '@netlify/neon';

export const config: Config = {
  path: '/api/data',
};

const ALLOWED_SORT = ['created_at', 'source', 'title', 'id'];

export default async (req: Request, _context: Context) => {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(req.url);
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(url.searchParams.get('pageSize') || '10', 10)));
  const sort = url.searchParams.get('sort') || 'created_at';
  const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'ASC' : 'DESC';
  const source = (url.searchParams.get('source') || '').trim();
  const keyword = (url.searchParams.get('keyword') || '').trim();

  const sortCol = ALLOWED_SORT.includes(sort) ? sort : 'created_at';
  const offset = (page - 1) * pageSize;

  try {
    const sql = neon();
    let total = 0;
    let rows: Record<string, unknown>[] = [];

    const countResult = source || keyword
      ? await sql(
          `SELECT COUNT(*)::int as total FROM content_items WHERE ($1::text = '' OR source ILIKE '%' || $1 || '%') AND ($2::text = '' OR title ILIKE '%' || $2 || '%' OR keywords ILIKE '%' || $2 || '%')`,
          [source, keyword]
        )
      : await sql(`SELECT COUNT(*)::int as total FROM content_items`);
    total = (countResult?.[0] as { total?: number })?.total ?? 0;

    const orderClause = `${sortCol} ${order}`;
    if (source || keyword) {
      rows = (await sql(
        `SELECT id, source, title, summary, keywords, created_at FROM content_items WHERE ($1::text = '' OR source ILIKE '%' || $1 || '%') AND ($2::text = '' OR title ILIKE '%' || $2 || '%' OR keywords ILIKE '%' || $2 || '%') ORDER BY ${orderClause} LIMIT ${pageSize} OFFSET ${offset}`,
        [source, keyword]
      )) as Record<string, unknown>[];
    } else {
      rows = (await sql(
        `SELECT id, source, title, summary, keywords, created_at FROM content_items ORDER BY ${orderClause} LIMIT ${pageSize} OFFSET ${offset}`
      )) as Record<string, unknown>[];
    }

    return new Response(JSON.stringify({ rows, total }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ rows: [], total: 0, message: (err as Error).message }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
