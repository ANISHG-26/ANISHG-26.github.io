const options = [...document.querySelectorAll('[data-theme-option]')];
const media = window.matchMedia('(prefers-color-scheme: dark)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector('[data-motion-toggle]');
let animationsEnabled = true;
try { animationsEnabled = localStorage.getItem('portfolio-motion') !== 'off'; } catch (_) {}
animationsEnabled = animationsEnabled && !reducedMotion.matches;
function applyMotionState(enabled) {
  animationsEnabled = enabled && !reducedMotion.matches;
  document.documentElement.classList.toggle('motion-disabled', !animationsEnabled);
  if (motionToggle) {
    motionToggle.setAttribute('aria-pressed', String(animationsEnabled));
    motionToggle.setAttribute('aria-label', animationsEnabled ? 'Turn animations off' : 'Turn animations on');
    motionToggle.title = animationsEnabled ? 'Animations on' : 'Animations off';
    const icon = motionToggle.querySelector('[data-lucide]');
    if (icon) icon.setAttribute('data-lucide', animationsEnabled ? 'pause' : 'play');
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 } });
  }
}
applyMotionState(animationsEnabled);
motionToggle?.addEventListener('click', () => {
  const next = !animationsEnabled;
  try { localStorage.setItem('portfolio-motion', next ? 'on' : 'off'); } catch (_) {}
  applyMotionState(next);
});
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
if (animationsEnabled && 'IntersectionObserver' in window) {
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
if (typedText && animationsEnabled) {
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
if (terminal && terminalCommand && terminalOutput && animationsEnabled) {
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
const experienceTreeTerminal = document.querySelector('.skills-terminal');
const experienceTreeCommand = document.querySelector('[data-experience-tree-command]');
const experienceTreeOutput = document.querySelector('.skills-tree');
if (experienceTreeTerminal && experienceTreeCommand && experienceTreeOutput && animationsEnabled) {
  const command = experienceTreeCommand.textContent;
  let experienceTreeStarted = false;
  const startExperienceTreeSequence = () => {
    if (experienceTreeStarted) return;
    experienceTreeStarted = true;
    experienceTreeCommand.textContent = '';
    document.documentElement.classList.add('experience-tree-pending');
    let index = 0;
    const typeExperienceTreeCommand = () => {
      experienceTreeCommand.textContent = command.slice(0, ++index);
      if (index < command.length) window.setTimeout(typeExperienceTreeCommand, 62);
      else window.setTimeout(() => {
        experienceTreeTerminal.classList.add('is-executed');
        document.documentElement.classList.remove('experience-tree-pending');
      }, 360);
    };
    typeExperienceTreeCommand();
  };
  if ('IntersectionObserver' in window) {
    const experienceTreeObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        startExperienceTreeSequence();
        experienceTreeObserver.disconnect();
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    experienceTreeObserver.observe(experienceTreeTerminal);
  } else {
    startExperienceTreeSequence();
  }
}
const fieldNotesCommand = document.querySelector('[data-field-notes-command]');
const fieldNotesList = document.querySelector('.field-notes-list');
if (fieldNotesCommand && fieldNotesList && animationsEnabled) {
  const command = fieldNotesCommand.textContent;
  fieldNotesCommand.textContent = '';
  document.documentElement.classList.add('field-notes-command-pending');
  let index = 0;
  const typeFieldNotesCommand = () => {
    fieldNotesCommand.textContent = command.slice(0, ++index);
    if (index < command.length) window.setTimeout(typeFieldNotesCommand, 62);
    else window.setTimeout(() => {
      document.documentElement.classList.remove('field-notes-command-pending');
      document.documentElement.classList.add('field-notes-command-executed');
    }, 420);
  };
  window.setTimeout(typeFieldNotesCommand, 260);
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
if (aboutCommand && aboutReveal && aboutProfile && animationsEnabled) {
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
const journeyReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function revealJourneyPanel(panel) {
  const command = panel.querySelector('[data-journey-command]');
  const content = panel.querySelector('.journey-file-content');
  if (!command || !content || journeyReducedMotion.matches || !animationsEnabled) return;
  const fullCommand = command.dataset.command || command.textContent;
  command.dataset.command = fullCommand;
  command.textContent = '';
  panel.classList.add('is-pending');
  let index = 0;
  const typeNext = () => {
    command.textContent = fullCommand.slice(0, ++index);
    if (index < fullCommand.length) window.setTimeout(typeNext, 42);
    else window.setTimeout(() => panel.classList.remove('is-pending'), 300);
  };
  typeNext();
}
journeyEntries.forEach(entry => entry.addEventListener('click', () => {
  const target = entry.dataset.journeyTarget;
  journeyEntries.forEach(item => {
    const active = item === entry;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  journeyPanels.forEach(panel => {
    panel.hidden = panel.id !== target;
    panel.classList.remove('is-pending');
    const command = panel.querySelector('[data-journey-command]');
    if (command?.dataset.command) command.textContent = command.dataset.command;
  });
  revealJourneyPanel(document.getElementById(target));
}));
