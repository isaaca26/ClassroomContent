chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("loading.html", {
    id: "main",
    state: "maximized"
  });
});
