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
  document.querySelector('meta[name="theme-color"]').content = dark ? '#111216' : '#f3f4fa';
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
  const valuesPanel = document.querySelector('.values-panel');
  typedText.setAttribute('aria-label', message);
  const visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');
  typedText.replaceChildren(visual);
  document.documentElement.classList.add('values-sequence-pending');
  let index = 0;
  const typeNext = () => {
    visual.textContent = reducedMotion.matches ? message : message.slice(0, ++index);
    if (!reducedMotion.matches && index < message.length) window.setTimeout(typeNext, 65);
    else window.setTimeout(() => {
      valuesPanel?.classList.add('is-executed');
      document.documentElement.classList.remove('values-sequence-pending');
    }, 480);
  };
  window.setTimeout(typeNext, 350);
}
const terminal = document.querySelector('.hero-terminal');
const terminalCommand = document.querySelector('[data-terminal-command]');
const terminalOutput = document.querySelector('[data-terminal-output]');
if (terminal && terminalCommand && terminalOutput && !reducedMotion.matches) {
  const command = terminalCommand.textContent;
  terminalCommand.textContent = '';
  document.documentElement.classList.add('terminal-sequence-pending');
  let index = 0;
  const typeCommand = () => {
    terminalCommand.textContent = command.slice(0, ++index);
    if (index < command.length) window.setTimeout(typeCommand, 70);
    else window.setTimeout(() => {
      terminal.classList.add('is-executed');
      document.documentElement.classList.remove('terminal-sequence-pending');
    }, 520);
  };
  window.setTimeout(typeCommand, 420);
}
const aboutCommand = document.querySelector('[data-about-command]');
const aboutReveal = document.querySelector('.about-reveal');
const aboutProfile = document.querySelector('.about-profile');
const aboutYamlCommand = document.querySelector('[data-about-yaml-command]');
const aboutYamlOutput = document.querySelector('[data-about-yaml-output]');
const aboutBassCommand = document.querySelector('[data-about-bass-command]');
const aboutEasterEgg = document.querySelector('[data-about-easter-egg]');
const aboutGliCommand = document.querySelector('[data-about-gli-command]');
const aboutGliOutput = document.querySelector('[data-about-gli-output]');
if (aboutCommand && aboutReveal && aboutProfile && !reducedMotion.matches) {
  const command = aboutCommand.textContent;
  aboutCommand.textContent = '';
  document.documentElement.classList.add('about-sequence-pending');
  let index = 0;
  const typeAboutCommand = () => {
    aboutCommand.textContent = command.slice(0, ++index);
    if (index < command.length) window.setTimeout(typeAboutCommand, 80);
    else window.setTimeout(() => {
      aboutProfile.classList.add('is-executed');
      document.documentElement.classList.remove('about-sequence-pending');
      runAboutYamlSequence();
    }, 480);
  };
  window.setTimeout(typeAboutCommand, 420);
}
function typeAboutTerminalCommand(target, pendingClass, command, onComplete) {
  if (!target) return;
  target.textContent = '';
  document.documentElement.classList.add(pendingClass);
  let index = 0;
  const typeNext = () => {
    target.textContent = command.slice(0, ++index);
    if (index < command.length) window.setTimeout(typeNext, 65);
    else window.setTimeout(onComplete, 420);
  };
  typeNext();
}
function runAboutYamlSequence() {
  if (!aboutYamlCommand || !aboutYamlOutput) return;
  typeAboutTerminalCommand(aboutYamlCommand, 'about-yaml-pending', aboutYamlCommand.dataset.command || aboutYamlCommand.textContent, () => {
    aboutYamlOutput.classList.add('is-rendered');
    document.documentElement.classList.remove('about-yaml-pending');
    window.setTimeout(runAboutBassSequence, 1000);
  });
}
function runAboutBassSequence() {
  if (!aboutBassCommand || !aboutEasterEgg) return;
  typeAboutTerminalCommand(aboutBassCommand, 'about-bass-pending', aboutBassCommand.dataset.command || aboutBassCommand.textContent, () => {
    aboutEasterEgg.classList.add('is-rendered');
    document.documentElement.classList.remove('about-bass-pending');
    window.setTimeout(runAboutGliSequence, 1000);
  });
}
function runAboutGliSequence() {
  if (!aboutGliCommand || !aboutGliOutput) return;
  typeAboutTerminalCommand(aboutGliCommand, 'about-gli-pending', aboutGliCommand.dataset.command || aboutGliCommand.textContent, () => {
    aboutGliOutput.querySelector('.ascii-art').classList.add('is-rendered');
    document.documentElement.classList.remove('about-gli-pending');
  });
}
const journeyEntries = [...document.querySelectorAll('[data-journey-target]')];
const journeyPanels = [...document.querySelectorAll('[data-journey-panel]')];
journeyEntries.forEach(entry => entry.addEventListener('click', () => {
  const target = entry.dataset.journeyTarget;
  journeyEntries.forEach(item => {
    const active = item === entry;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  journeyPanels.forEach(panel => { panel.hidden = panel.id !== target; });
}));
