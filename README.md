# 🎬 YouTube Loop Toggle (Chrome Extension)
<h4>#WithVibeCode<h4>
  
A minimal Chrome extension that lets you **Toggle Auto-Looping** for YouTube videos with a single click on the extension icon — no popups, no extra menus.  
Perfect for music lovers, students, or anyone who keeps replaying that one video.

---

## 🧠 Features
- 🖱️ **One-click toggle** — just click the extension icon to enable or disable looping  
- 🔁 **Auto-loops any YouTube video** instantly  
- 🎨 **Dynamic icon** — changes icon when active/inactive  
- 💾 **Persistent state** — remembers your last loop state even after refresh  
- ⚡ **Lightweight & fast** — built with Manifest V3, no unnecessary permissions  

---

## 🧩 Folder Structure
```
yt-loop-extension/
├─ manifest.json
├─ background.js
├─ content.js
├─ icon_active.png
└─ icon_inactive.png
```

---

## ⚙️ How It Works
1. When you click the extension icon:
   - The background script toggles `loopEnabled` (true/false)
   - Updates the icon to show **active/inactive**
   - Sends a message to YouTube tabs to enable/disable looping  
2. The content script applies the loop setting to any video element it finds — even if the user navigates within YouTube (no full page reload needed).

---

## 🚀 Installation (Developer Mode)
1. Clone or download this folder  
2. Go to **chrome://extensions/**
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `yt-loop-extension` folder
6. Open a YouTube video → click the extension icon     
   - Loop OFF / Inactive <img width="48px" height="48px" src="yt-loop-extension/icon_inactive.png" width="150"/>
   - Loop ON / Active <img width="48px" height="48px" src="yt-loop-extension/icon_active.png" width="150"/>  

---

## 🧩 Open Source & Customization

This Project is *Completely Open-Source* 🧡  
Feel free to:
- 🧠 Study how it works  
- 🛠️ Modify the code for your own use  
- 🎨 Replace the icons or colors to match your style  
- 🚀 And load it as your own Chrome extension  

If you want to change the icons:
1. Replace the icon png files
2. But keep the same names for each icon

---

> Made With ❤️&☕ By Azk 💗

