const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`project lessons and skills remain clear on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    await page.goto('/projects/');
    await expect(page.locator('.project-card')).toHaveCount(4);
    await expect(page.getByText('Music Recommendation Chatbot', { exact: true })).toBeVisible();

    await page.goto('/projects/music-recommendation-chatbot/');
    await expect(page.locator('.mini-architecture')).toBeVisible();
    await expect(page.getByText('Docker · Cloud Run', { exact: true })).toBeVisible();
    await expect(page.locator('a[href*="github.com"]')).toHaveCount(1);

    await page.goto('/projects/moving-services-application/');
    await expect(page.locator('.mini-architecture')).toBeVisible();
    await expect(page.getByText('React PWA', { exact: true })).toBeVisible();

    await page.goto('/experience/');
    await expect(page.locator('.skill-branch')).toHaveCount(4);
    await expect(page.getByRole('heading', { name: /Building depth\/$/ })).toBeVisible();
    await expect(page.getByText('Active hands-on learning, listed separately from production experience.', { exact: true })).toBeVisible();

    const overflow = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
  });
}
