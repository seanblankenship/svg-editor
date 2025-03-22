import { test, expect } from 'playwright/test';

test.describe('Layout Visual Regression Tests', () => {
  test('App layout renders correctly in light mode', async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:3000');

    // Wait for layout to stabilize
    await page.waitForSelector('header');

    // Take a screenshot of the entire page
    const screenshot = await page.screenshot();

    // Compare with baseline (will create baseline if it doesn't exist)
    await expect(screenshot).toMatchSnapshot('app-layout-light.png');
  });

  test('App layout renders correctly in dark mode', async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:3000');

    // Set dark mode by clicking the theme toggle
    await page.locator('button:has(span.sr-only:text("Toggle theme"))').click();
    await page.waitForTimeout(500); // Wait for animation to complete

    // Wait for layout to stabilize
    await page.waitForSelector('header');

    // Take a screenshot of the entire page
    const screenshot = await page.screenshot();

    // Compare with baseline (will create baseline if it doesn't exist)
    await expect(screenshot).toMatchSnapshot('app-layout-dark.png');
  });

  test('Responsive layout adapts correctly on mobile', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to the application
    await page.goto('http://localhost:3000');

    // Wait for layout to stabilize
    await page.waitForSelector('header');

    // Take a screenshot of the entire page
    const screenshot = await page.screenshot();

    // Compare with baseline (will create baseline if it doesn't exist)
    await expect(screenshot).toMatchSnapshot('app-layout-mobile.png');
  });
});
