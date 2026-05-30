import { test, expect } from '@playwright/test';

// The function races up to two AI providers (≈15s each) before falling back,
// so allow generous timeouts independent of the global actionTimeout.
const AI_TIMEOUT = 45_000;

test.describe('API /api/ai-chat', () => {
  test.describe.configure({ timeout: 70_000 });

  test('does NOT redirect (regression)', async ({ request }) => {
    const res = await request.post('/api/ai-chat', {
      data: { message: 'hi', locale: 'zh' },
      maxRedirects: 0,
      timeout: AI_TIMEOUT,
    });
    expect([301, 302, 307, 308]).not.toContain(res.status());
    expect(res.status()).toBe(200);
  });

  test('valid message returns reply string and suggestedLinks array', async ({ request }) => {
    const res = await request.post('/api/ai-chat', {
      data: { message: '你们的产品页在哪里？', locale: 'zh' },
      timeout: AI_TIMEOUT,
    });
    expect(res.status(), await res.text()).toBe(200);
    const data = await res.json();
    expect(typeof data.reply).toBe('string');
    expect(data.reply.length).toBeGreaterThan(0);
    expect(Array.isArray(data.suggestedLinks)).toBe(true);
  });

  test('empty message returns 400', async ({ request }) => {
    const res = await request.post('/api/ai-chat', {
      data: { message: '', locale: 'zh' },
      timeout: AI_TIMEOUT,
    });
    expect(res.status()).toBe(400);
  });

  test('GET is not allowed (405)', async ({ request }) => {
    const res = await request.get('/api/ai-chat', { timeout: AI_TIMEOUT });
    expect(res.status()).toBe(405);
  });
});
