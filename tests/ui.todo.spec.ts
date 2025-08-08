import { test, expect } from '@playwright/test';

test.describe('TodoMVC — basic flow', () => {
  test('add and complete a todo @smoke', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('input.new-todo', { state: 'visible', timeout: 15000 });

    const input = page.locator('input.new-todo');
    await input.fill('Write creative Playwright tests');
    await input.press('Enter');

    const firstItem = page.locator('.todo-list li').first();
    await expect(firstItem).toContainText('Write creative Playwright tests');

    await firstItem.locator('.toggle').check();
    await expect(firstItem).toHaveClass(/completed/);
  });

  test('handles empty items gracefully', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('input.new-todo', { state: 'visible', timeout: 15000 });
    await page.locator('input.new-todo').press('Enter');
    await expect(page.locator('.todo-list li')).toHaveCount(0);
  });
});
