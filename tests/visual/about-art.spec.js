const { test, expect } = require('@playwright/test');

const devices = [
  { name: 'small-phone', width: 375, height: 667 },
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet-portrait', width: 820, height: 1180 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
  { name: 'small-laptop', width: 1280, height: 800 },
  { name: 'desktop', width: 1440, height: 900 },
];

for (const device of devices) {
  test(`terminal artwork remains intact on ${device.name}`, async ({ page }) => {
    await page.setViewportSize({ width: device.width, height: device.height });
    await page.goto('/about/');

    const layout = await page.evaluate(() => {
      const measure = (selector) => {
        const element = document.querySelector(selector);
        const style = getComputedStyle(element);
        return {
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
          whiteSpace: style.whiteSpace,
          lines: element.innerText.replace(/\n$/, '').split('\n').length,
        };
      };

      return {
        viewport: innerWidth,
        pageClientWidth: document.documentElement.clientWidth,
        pageScrollWidth: document.documentElement.scrollWidth,
        terminalColumns: getComputedStyle(
          document.querySelector('.about-profile-terminal')
        ).gridTemplateColumns.split(' ').length,
        cats: measure('.portrait-cats'),
        bass: measure('.bass-tab'),
        gli: measure('.gli-art'),
        catsCenterDelta: Math.abs(
          document.querySelector('.portrait-cats code').getBoundingClientRect().x
          + document.querySelector('.portrait-cats code').getBoundingClientRect().width / 2
          - (document.querySelector('.portrait-cats').getBoundingClientRect().x
            + document.querySelector('.portrait-cats').getBoundingClientRect().width / 2)
        ),
        gliCenterDelta: Math.abs(
          document.querySelector('.gli-art').getBoundingClientRect().x
          + document.querySelector('.gli-art').getBoundingClientRect().width / 2
          - (document.querySelector('.about-gli-output').getBoundingClientRect().x
            + document.querySelector('.about-gli-output').getBoundingClientRect().width / 2)
        ),
      };
    });

    expect(layout.pageScrollWidth).toBeLessThanOrEqual(layout.pageClientWidth);
    expect(layout.cats.lines).toBe(3);
    expect(layout.bass.lines).toBe(5);
    expect(layout.gli.lines).toBe(5);
    expect(layout.catsCenterDelta).toBeLessThanOrEqual(1);
    expect(layout.gliCenterDelta).toBeLessThanOrEqual(1);

    for (const art of [layout.cats, layout.bass, layout.gli]) {
      expect(art.whiteSpace).toBe('pre');
      expect(art.scrollWidth).toBeLessThanOrEqual(art.clientWidth);
    }

    if (layout.viewport >= 801 && layout.viewport <= 1180) {
      expect(layout.terminalColumns).toBe(1);
    }
  });
}
