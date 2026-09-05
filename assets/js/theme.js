const options = [...document.querySelectorAll('[data-theme-option]')];
const media = window.matchMedia('(prefers-color-scheme: dark)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let selectedTheme = 'system';
try { selectedTheme = localStorage.getItem('portfolio-theme') || 'system'; } catch (_) {}
if (!['light', 'dark', 'system'].includes(selectedTheme)) selectedTheme = 'system';
function applyTheme(theme) {
  selectedTheme = theme;
  const dark = theme === 'dark' || (theme === 'system' && media.matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#111216' : '#f4f4f6';
  options.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeOption === theme)));
}
applyTheme(selectedTheme);
options.forEach(button => button.addEventListener('click', () => {
  const theme = button.dataset.themeOption;
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
  applyTheme(theme);
}));
media.addEventListener('change', () => { if (selectedTheme === 'system') applyTheme('system'); });
if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 } });
const revealItems = [...document.querySelectorAll('.reveal')];
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.03 });
  document.documentElement.classList.add('motion-ready');
  revealItems.forEach(item => observer.observe(item));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { document.documentElement.classList.remove('motion-ready'); observer.disconnect(); }
  });
}
const typedText = document.querySelector('[data-typed-text]');
if (typedText && !reducedMotion.matches) {
  const message = typedText.textContent;
  typedText.setAttribute('aria-label', message);
  const visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');
  typedText.replaceChildren(visual);
  let index = 0;
  const typeNext = () => {
    visual.textContent = reducedMotion.matches ? message : message.slice(0, ++index);
    if (!reducedMotion.matches && index < message.length) window.setTimeout(typeNext, 65);
  };
  window.setTimeout(typeNext, 350);
}
