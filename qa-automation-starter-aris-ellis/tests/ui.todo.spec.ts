import { test, expect } from '@playwright/test';

test.describe('TodoMVC — basic flow', () => {
  test('add and complete a todo @smoke', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('Write creative Playwright tests');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    const firstItem = page.locator('.todo-list li').first();
    await expect(firstItem).toContainText('Write creative Playwright tests');

    // Mark complete
    await firstItem.locator('.toggle').check();
    await expect(firstItem).toHaveClass(/completed/);

    // Visual regression snapshot of the list (Playwright handles diffing)
    await expect(page.locator('.todo-list')).toHaveScreenshot('todo-list.png', { maxDiffPixelRatio: 0.02 });
  });

  test('handles empty items gracefully', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.locator('.todo-list li')).toHaveCount(0);
  });
});
