// appearance.js — handles all UI customisation, loads before sidebar.js

const DEFAULTS = { theme: 'light', accent: 'slate', fontsize: 'md', layout: 'default' };

// Apply all settings to the <html> element
function applySettings(settings) {
  const root = document.documentElement;
  root.setAttribute('data-theme',    settings.theme    || DEFAULTS.theme);
  root.setAttribute('data-accent',   settings.accent   || DEFAULTS.accent);
  root.setAttribute('data-fontsize', settings.fontsize || DEFAULTS.fontsize);
  root.setAttribute('data-layout',   settings.layout   || DEFAULTS.layout);
}

// Load saved settings and apply immediately (before render)
function loadAppearance() {
  chrome.storage.local.get(['appearance'], ({ appearance }) => {
    const settings = appearance || DEFAULTS;
    applySettings(settings);
    updateUI(settings);
  });
}

// Sync UI controls to reflect current settings
function updateUI(settings) {
  // Theme
  document.querySelectorAll('.theme-option').forEach(el => {
    el.classList.toggle('active', el.dataset.themeOpt === (settings.theme || DEFAULTS.theme));
  });
  // Accent
  document.querySelectorAll('.swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.accentOpt === (settings.accent || DEFAULTS.accent));
  });
  // Font size
  document.querySelectorAll('.font-option').forEach(el => {
    el.classList.toggle('active', el.dataset.fontOpt === (settings.fontsize || DEFAULTS.fontsize));
  });
  // Layout
  document.querySelectorAll('.layout-option').forEach(el => {
    el.classList.toggle('active', el.dataset.layoutOpt === (settings.layout || DEFAULTS.layout));
  });
}

function saveSetting(key, value) {
  chrome.storage.local.get(['appearance'], ({ appearance }) => {
    const settings = { ...(appearance || DEFAULTS), [key]: value };
    chrome.storage.local.set({ appearance: settings }, () => {
      applySettings(settings);
      updateUI(settings);
    });
  });
}

// ── Theme toggle ──────────────────────────────────────────────────────────────
document.querySelectorAll('.theme-option').forEach(el => {
  el.addEventListener('click', () => saveSetting('theme', el.dataset.themeOpt));
});

// ── Accent colour ─────────────────────────────────────────────────────────────
document.querySelectorAll('.swatch').forEach(el => {
  el.addEventListener('click', () => saveSetting('accent', el.dataset.accentOpt));
});

// ── Font size ─────────────────────────────────────────────────────────────────
document.querySelectorAll('.font-option').forEach(el => {
  el.addEventListener('click', () => saveSetting('fontsize', el.dataset.fontOpt));
});

// ── Layout density ────────────────────────────────────────────────────────────
document.querySelectorAll('.layout-option').forEach(el => {
  el.addEventListener('click', () => saveSetting('layout', el.dataset.layoutOpt));
});

// Load on startup
loadAppearance();
