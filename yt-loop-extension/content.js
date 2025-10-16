// Apply loop when needed
function applyLoop(enabled) {
  const video = document.querySelector("video");
  if (video) {
    video.loop = enabled;
    console.log(enabled ? "🔁 Loop ON" : "⏹️ Loop OFF");
  } else {
    // Try again later (YouTube changes pages without reload)
    setTimeout(() => applyLoop(enabled), 1000);
  }
}

// Listen to background messages
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.loopEnabled !== undefined) {
    applyLoop(msg.loopEnabled);
  }
});

// Reapply when page changes (YouTube uses dynamic navigation)
let lastUrl = location.href;
setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    chrome.storage.local.get("loopEnabled", (data) => {
      applyLoop(data.loopEnabled);
    });
  }
}, 1000);

// Initial load
chrome.storage.local.get("loopEnabled", (data) => {
  applyLoop(data.loopEnabled);
});
