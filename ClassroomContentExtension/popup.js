"use strcit";

let channel;
chrome.storage.sync.get(["channel"], function(result) {
  channel = result.channel;
  document.getElementById("channel").innerText = channel;
});

document.querySelector("button").onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const data = { url: tabs[0].url, channel: channel };

    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  });
};
