import { test, expect } from '@playwright/test';
import { LOCALES } from './_helpers';

test.describe('SEO', () => {
  test('robots.txt is reachable and references sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body.toLowerCase()).toContain('user-agent');
    expect(body.toLowerCase()).toContain('sitemap');
  });

  test('sitemap.xml is reachable and lists locale pages', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain('<urlset');
    expect(body).toMatch(/\/zh(\/|<)/);
    expect(body).toMatch(/\/en(\/|<)/);
    expect(body).toContain('/zh/product');
  });

  for (const locale of LOCALES) {
    test(`/${locale} has html lang, title and description meta`, async ({ page }) => {
      await page.goto(`/${locale}`, { waitUntil: 'domcontentloaded' });
      const lang = await page.locator('html').getAttribute('lang');
      expect(lang).toBe(locale);
      await expect(page).toHaveTitle(/.+/);
      const desc = page.locator('head meta[name="description"]');
      await expect(desc).toHaveCount(1);
      const content = await desc.getAttribute('content');
      expect((content || '').length).toBeGreaterThan(10);
    });
  }
});
