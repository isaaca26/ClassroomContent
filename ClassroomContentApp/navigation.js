let back = document.getElementById('back');
back.onclick = function() {
  const webview = document.querySelector("webview");
  webview.back(function callback(success){
  });
};

let forward = document.getElementById('forward');
forward.onclick = function() {
  const webview = document.querySelector("webview");
  webview.forward(function callback(success){
  });
};

let refresh = document.getElementById('refresh');
refresh.onclick = function() {
  const webview = document.querySelector("webview");
  webview.reload();
};