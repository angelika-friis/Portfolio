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
