// background.js — Native Intelligence service worker

// Open sidebar when toolbar icon is clicked directly
chrome.action.onClicked.addListener(async (tab) => {
  await chrome.sidePanel.open({ tabId: tab.id });
});

// Handle messages from popup
chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg.type === 'OPEN_SIDEBAR') {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab) {
        await chrome.sidePanel.open({ tabId: tab.id });
        // Send tab switch AFTER sidebar is open — give it time to load
        if (msg.tab) {
          setTimeout(() => {
            chrome.runtime.sendMessage({ type: 'SWITCH_TAB', tab: msg.tab }).catch(() => {});
          }, 600);
        }
      }
      sendResponse({ ok: true });
    } catch(e) {
      sendResponse({ ok: false, error: e.message });
    }
  }
  return true; // keep message channel open for async response
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ history: [] });
});
