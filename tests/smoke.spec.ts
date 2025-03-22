import { test, expect } from '@playwright/test';

test('smoke test - app should load', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:4173/');

  // Check that the page has loaded by looking for the header
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Verify the title is present
  const title = page.locator('h1:has-text("SVG Editor")');
  await expect(title).toBeVisible();
});
