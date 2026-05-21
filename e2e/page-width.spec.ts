import { expect, test } from '@playwright/test';

test('page width does not exceed viewport width', async ({ page }) => {
  await page.goto('/');

  const { pageWidth, viewportWidth } = await page.evaluate(() => {
    const pageWidth = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    );

    return {
      pageWidth,
      viewportWidth: window.innerWidth,
    };
  });

  expect(
    pageWidth,
    `Expected page width ${pageWidth}px to fit within viewport width ${viewportWidth}px`,
  ).toBeLessThanOrEqual(viewportWidth);
});

test('desktop companion is hidden below desktop breakpoint', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1023, height: 800 });
  await page.goto('/');

  await expect(page.getByText('cat', { exact: true })).not.toBeVisible();
});

test('desktop companion is visible at desktop breakpoint', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto('/');

  await expect(page.getByText('cat', { exact: true })).toBeVisible();
});
