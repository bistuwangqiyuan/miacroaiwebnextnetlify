import { test, expect } from '@playwright/test';

test.describe('API /api/feedback', () => {
  test('does NOT redirect (regression)', async ({ request }) => {
    const res = await request.post('/api/feedback', {
      data: { name: 'x', message: 'y' },
      maxRedirects: 0,
    });
    expect([200, 400, 500]).toContain(res.status());
    expect([301, 302, 307, 308]).not.toContain(res.status());
  });

  test('valid submission returns ok', async ({ request }) => {
    const res = await request.post('/api/feedback', {
      data: {
        name: 'E2E Tester',
        email: 'e2e@example.com',
        message: `Automated test ${Date.now()}`,
      },
    });
    expect(res.status(), await res.text()).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
  });

  test('missing required fields returns 400', async ({ request }) => {
    const res = await request.post('/api/feedback', { data: { email: 'noname@example.com' } });
    expect(res.status()).toBe(400);
  });

  test('GET is not allowed (405)', async ({ request }) => {
    const res = await request.get('/api/feedback');
    expect(res.status()).toBe(405);
  });
});
