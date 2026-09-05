const options = [...document.querySelectorAll('[data-theme-option]')];
const media = window.matchMedia('(prefers-color-scheme: dark)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (window.lucide) {
  window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });
}

function applyTheme(theme) {
  const dark = theme === 'dark' || (theme === 'system' && media.matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#111216' : '#f4f4f6';

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

const revealItems = [...document.querySelectorAll('.reveal')];

if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px' });

  revealItems.forEach((item) => observer.observe(item));
}

if (!reducedMotion.matches) {
  const typedText = document.querySelector('[data-typed-text]');
  if (typedText) {
    const message = typedText.textContent;
    typedText.textContent = '';
    let index = 0;
    const typeNext = () => {
      typedText.textContent = message.slice(0, index += 1);
      if (index < message.length) window.setTimeout(typeNext, 62);
    };
    window.setTimeout(typeNext, 650);
  }
}
