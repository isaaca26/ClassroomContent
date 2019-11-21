const ws = new WebSocket("ws://localhost:3000");
ws.onopen = function() {
  ws.onmessage = function(event) {
    const webview = document.querySelector("webview");
    webview.src = event.data;
  };
};

/* var IDLE_TIMEOUT = 15; 
var _idleSecondsCounter = 0;
document.onclick = function() {
    _idleSecondsCounter = 0;
};
document.onmousemove = function() {
    _idleSecondsCounter = 0;
};
document.onkeypress = function() {
    _idleSecondsCounter = 0;
};
window.setInterval(CheckIdleTime, 1000);

function CheckIdleTime() {
    _idleSecondsCounter++;
    //var oPanel = document.getElementById("SecondsUntilExpire");
    console.log(IDLE_TIMEOUT - _idleSecondsCounter);
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        console.log("Time expired!");
        document.location.href = "logout.html";
    }
} */
var count = 0;
var myInterval;
// Active
window.addEventListener("focus", startTimer);

// Inactive
window.addEventListener("blur", stopTimer);

function timerHandler() {
  count++;
  console.log(count);
}

// Start timer
function startTimer() {
  myInterval = window.setInterval(timerHandler, 1000);
}

// Stop timer
function stopTimer() {
  window.clearInterval(myInterval);
}
