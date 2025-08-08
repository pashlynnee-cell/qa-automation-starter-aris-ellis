import { test, expect } from "@playwright/test";

test.describe("example.com — basic checks", () => {
  test("home page renders with correct title and H1 @smoke", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.ok()).toBeTruthy();
    await expect(page).toHaveTitle(/Example Domain/i);
    await expect(page.locator("h1")).toHaveText("Example Domain");
  });

  test("More information link goes to IANA", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /more information/i }).click();
    await expect(page).toHaveURL(/iana\.org/i);
  });
});
