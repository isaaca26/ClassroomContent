const ws = new WebSocket("ws://localhost:3000");
ws.onopen = function() {
  ws.onmessage = function(event) {
    const webview = document.querySelector("webview");
    webview.src = event.data;
  };
};
