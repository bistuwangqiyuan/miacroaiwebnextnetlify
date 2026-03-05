import type { Context, Config } from '@netlify/functions';
import { neon } from '@netlify/neon';

export const config: Config = {
  path: '/api/feedback',
};

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = String(body?.name ?? '').trim();
  const message = String(body?.message ?? '').trim();
  const email = String(body?.email ?? '').trim();
  if (!name || !message) {
    return new Response(JSON.stringify({ error: 'Name and message required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const sql = neon();
    await sql(
      `INSERT INTO feedback (name, email, message, created_at) VALUES ($1, $2, $3, NOW())`,
      [name, email || null, message]
    );
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Database error', message: (err as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
