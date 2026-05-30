import { test, expect } from '@playwright/test';

test.describe('UI flows (real browser)', () => {
  test('home loads and header navigation works', async ({ page }) => {
    await page.goto('/zh', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('header')).toContainText('微算');
    await page.locator('header a[href="/zh/product"]').first().click();
    await page.waitForURL(/\/zh\/product/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('AI chat widget opens, sends a message and receives a reply', async ({ page }) => {
    await page.goto('/zh', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'AI 客服' }).click();
    const input = page.getByPlaceholder('输入消息…');
    await expect(input).toBeVisible();
    await input.fill('你们的产品页在哪里？');
    await page.getByRole('button', { name: '发送' }).click();
    // user message appears immediately
    await expect(page.locator('text=你们的产品页在哪里？')).toBeVisible();
    // assistant reply bubble (left-aligned bg-neutral-100) appears within timeout
    await expect(page.locator('.bg-neutral-100').first()).toBeVisible({ timeout: 30_000 });
  });

  test('data page loads table and filter interaction works', async ({ page }) => {
    await page.goto('/zh/data', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('table')).toBeVisible({ timeout: 20_000 });
    await expect(page.locator('text=/共 \\d+ 条/')).toBeVisible({ timeout: 20_000 });
    await page.getByPlaceholder('关键词').fill('zzz_no_match_zzz');
    await page.getByRole('button', { name: '筛选' }).click();
    // table still renders (either rows or empty state)
    await expect(page.locator('table')).toBeVisible();
  });

  test('feedback form submits successfully', async ({ page }) => {
    await page.goto('/zh/feedback', { waitUntil: 'domcontentloaded' });
    await page.locator('#fb-name').fill('E2E UI Tester');
    await page.locator('#fb-email').fill('e2e-ui@example.com');
    await page.locator('#fb-msg').fill(`UI flow message ${Date.now()}`);
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page.locator('text=提交成功')).toBeVisible({ timeout: 20_000 });
  });
});
