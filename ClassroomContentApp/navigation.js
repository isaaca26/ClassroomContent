document.getElementById("back").onclick = function() {
  const webview = document.querySelector("webview");
  webview.back(function callback(success) {});
};

document.getElementById("forward").onclick = function() {
  const webview = document.querySelector("webview");
  webview.forward(function callback(success) {});
};

document.getElementById("refresh").onclick = function() {
  const webview = document.querySelector("webview");
  webview.reload();
};