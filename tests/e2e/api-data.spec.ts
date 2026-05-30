import { test, expect } from '@playwright/test';

test.describe('API /api/data', () => {
  test('does NOT redirect (regression: middleware must skip /api)', async ({ request }) => {
    const res = await request.get('/api/data?page=1&pageSize=5', { maxRedirects: 0 });
    expect(res.status(), 'API must not be redirected by i18n middleware').toBe(200);
  });

  test('returns JSON with rows array and numeric total', async ({ request }) => {
    const res = await request.get('/api/data?page=1&pageSize=5');
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data.rows)).toBe(true);
    expect(typeof data.total).toBe('number');
  });

  test('respects pageSize', async ({ request }) => {
    const res = await request.get('/api/data?page=1&pageSize=3');
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.rows.length).toBeLessThanOrEqual(3);
  });

  test('accepts sort and order params', async ({ request }) => {
    const res = await request.get('/api/data?sort=title&order=asc&page=1&pageSize=5');
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data.rows)).toBe(true);
  });

  test('accepts source and keyword filters', async ({ request }) => {
    const res = await request.get('/api/data?source=foo&keyword=bar&page=1&pageSize=5');
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data.rows)).toBe(true);
    expect(typeof data.total).toBe('number');
  });

  test('falls back gracefully on invalid sort column', async ({ request }) => {
    const res = await request.get('/api/data?sort=__evil__&page=1&pageSize=5');
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data.rows)).toBe(true);
  });
});
