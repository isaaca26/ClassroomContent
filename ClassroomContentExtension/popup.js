let send = document.querySelector("button");
send.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const data = { url: tabs[0].url };

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
