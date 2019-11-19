chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("window.html", {
    id: "main",
    state: "maximized"
  });
});
