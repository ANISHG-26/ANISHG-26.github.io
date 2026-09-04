const options = [...document.querySelectorAll('[data-theme-option]')];
const media = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  const dark = theme === 'dark' || (theme === 'system' && media.matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#152124' : '#f2f6f5';

  options.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeOption === theme));
  });
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'system';
applyTheme(savedTheme);

options.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeOption;
    localStorage.setItem('portfolio-theme', theme);
    applyTheme(theme);
  });
});

media.addEventListener('change', () => {
  if ((localStorage.getItem('portfolio-theme') || 'system') === 'system') {
    applyTheme('system');
  }
});
