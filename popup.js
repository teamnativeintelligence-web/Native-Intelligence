// popup.js

async function openSidebarAndClose(tab) {
  // Get current tab
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab) return;

  // Open the side panel directly — this works within the popup's user gesture context
  await chrome.sidePanel.open({ tabId: activeTab.id });

  // If a specific tab was requested, tell the sidebar to switch after it loads
  if (tab) {
    setTimeout(() => {
      chrome.runtime.sendMessage({ type: 'SWITCH_TAB', tab }).catch(() => {});
    }, 700);
  }

  // Close popup after panel is open
  setTimeout(() => window.close(), 200);
}

document.getElementById('open-sidebar').addEventListener('click', () => openSidebarAndClose(null));
document.getElementById('quick-verify').addEventListener('click', () => openSidebarAndClose('verify'));
document.getElementById('quick-source').addEventListener('click', () => openSidebarAndClose('source'));

document.getElementById('clear-history').addEventListener('click', () => {
  chrome.storage.local.set({ history: [] }, renderHistory);
});

function renderHistory() {
  chrome.storage.local.get(['history'], ({ history = [] }) => {
    const el = document.getElementById('popup-history');
    if (!history.length) {
      el.innerHTML = `<div class="empty-state"><div class="icon">📋</div>No checks yet</div>`;
      return;
    }
    el.innerHTML = history.slice(0, 6).map(item => {
      const isVerify  = item.type === 'verify';
      const pctNum    = parseInt(item.pct || 0);
      const pillClass = isVerify ? (pctNum > 65 ? 'pill-ai' : pctNum < 35 ? 'pill-human' : 'pill-mixed') : 'pill-source';
      const pillText  = isVerify ? (item.pct || '?') : 'SRC';
      return `<div class="history-item">
        <span class="history-pill ${pillClass}">${pillText}</span>
        <span class="history-text">${item.text}</span>
        <span class="history-date">${item.date}</span>
      </div>`;
    }).join('');
  });
}

document.addEventListener('DOMContentLoaded', renderHistory);
chrome.storage.onChanged.addListener(renderHistory);
