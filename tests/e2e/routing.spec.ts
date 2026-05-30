import { test, expect } from '@playwright/test';
import { LOCALES, PAGES, BRAND, pageUrl, NOT_FOUND_TITLE, TITLE_BRAND } from './_helpers';

test.describe('Routing & i18n', () => {
  test('root redirects to a locale-prefixed path', async ({ request }) => {
    const res = await request.get('/', { maxRedirects: 0 });
    expect([301, 302, 307, 308]).toContain(res.status());
    const location = res.headers()['location'] || '';
    expect(location).toMatch(/\/(zh|en)(\/|$|\?)/);
  });

  for (const locale of LOCALES) {
    test(`locale home /${locale} responds 200`, async ({ request }) => {
      const res = await request.get(`/${locale}`);
      expect(res.status()).toBe(200);
      const body = await res.text();
      // A genuine 404 would title the document "404: This page could not be found".
      expect(body).not.toContain(`<title>${NOT_FOUND_TITLE}`);
      expect(body).toMatch(TITLE_BRAND);
    });
  }

  for (const locale of LOCALES) {
    for (const path of PAGES) {
      test(`page ${pageUrl(locale, path)} renders without 404`, async ({ page }) => {
        const res = await page.goto(pageUrl(locale, path), { waitUntil: 'domcontentloaded' });
        expect(res?.status(), `status for ${pageUrl(locale, path)}`).toBeLessThan(400);
        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('header')).toContainText(BRAND[locale]);
        await expect(page.locator('main')).toBeVisible();
        await expect(page).toHaveTitle(TITLE_BRAND);
      });
    }
  }

  test('language switch link navigates between locales', async ({ page }) => {
    await page.goto('/zh/product', { waitUntil: 'domcontentloaded' });
    const enLink = page.locator('header a[href^="/en"]').first();
    await expect(enLink).toBeVisible();
    await enLink.click();
    await page.waitForURL(/\/en/);
    await expect(page.locator('header')).toContainText(BRAND.en);
  });
});
