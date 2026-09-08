const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'phone', width: 390, height: 844, mobile: true },
  { name: 'desktop', width: 1440, height: 900, mobile: false },
];

for (const viewport of viewports) {
  test(`cross-cloud architecture is readable on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/projects/cross-cloud-mlops-pipeline/');

    const diagram = page.locator('.mlops-architecture');
    await expect(diagram).toBeVisible();
    await expect(page.getByText('One delivery intent, expressed through three providers.')).toBeVisible();
    await expect(page.locator('.mlops-provider-map section')).toHaveCount(3);

    if (viewport.mobile) {
      await expect(page.locator('.mlops-mobile-flow')).toBeVisible();
      await expect(page.locator('.mlops-architecture-desktop')).toBeHidden();
    } else {
      await expect(page.locator('.mlops-architecture-desktop')).toBeVisible();
      await expect(page.locator('.mlops-mobile-flow')).toBeHidden();
    }

    const overflow = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
  });
}
