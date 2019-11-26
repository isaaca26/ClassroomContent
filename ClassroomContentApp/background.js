chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("window2.html", {
    id: "main",
    state: "maximized"
  });
});
