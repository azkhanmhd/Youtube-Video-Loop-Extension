// Initialize loop state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ loopEnabled: false });
});

// Handle icon click
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url.includes("youtube.com")) return;

  const { loopEnabled } = await chrome.storage.local.get("loopEnabled");
  const newState = !loopEnabled;

  // Save new state
  await chrome.storage.local.set({ loopEnabled: newState });

  // Update icon
  const icon = newState ? "icon_active.png" : "icon_inactive.png";
  await chrome.action.setIcon({ path: icon });

  // Notify all YouTube tabs
  const tabs = await chrome.tabs.query({ url: "*://www.youtube.com/*" });
  for (const ytTab of tabs) {
    chrome.tabs.sendMessage(ytTab.id, { loopEnabled: newState });
  }
});
