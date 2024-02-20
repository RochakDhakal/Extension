// popup.js
document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs.length > 0) {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url) {
        const url = currentTab.url;
        console.log(url);
      }
    }
  });
});
