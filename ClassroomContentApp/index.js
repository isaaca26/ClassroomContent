window.mdc.autoInit();
let el = document.querySelector(".chrome-tabs");
let chromeTabs = new ChromeTabs();
chromeTabs.init(el);

document.getElementById("submit").onclick = function() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";

  const code = document.getElementById("tf-outlined").value;
  const ws = new WebSocket("ws://localhost:3000/" + code);
  ws.onopen = function() {
    ws.onmessage = function(event) {
      const webview = document.querySelector("webview");
      webview.src = event.data;

      document.getElementById("screen2").style.display = "none";
      document.getElementById("screen3").style.display = "block";

      chromeTabs.addTab({
        title: "New Tab",
        favicon: false
      });
    };
  };
};

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
