const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/visual',
  outputDir: 'tmp/playwright-results',
  reporter: 'line',
  use: {
    baseURL: process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:4000',
    colorScheme: 'dark',
    reducedMotion: 'reduce',
    screenshot: { mode: 'only-on-failure', fullPage: true },
  },
  webServer: {
    command: 'python -m http.server 4000 --directory _site',
    url: 'http://127.0.0.1:4000/about/',
    reuseExistingServer: true,
  },
});
