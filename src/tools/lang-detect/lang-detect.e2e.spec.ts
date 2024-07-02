import { test, expect } from '@playwright/test';

test.describe('Tool - Lang detect', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/lang-detect');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Lang detect - CodeToolsHub');
  });

  test('', async ({ page }) => {

  });
});