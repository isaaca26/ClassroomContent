"use strict";

const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const wss = expressWs.getWss("/");
const bodyParser = require("body-parser");

let connections = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", function(req, res) {
  let connect;
  for (connect of connections) {
    if (connect.channel === req.body.channel) {
      const client = connect.client;
      client.send(req.body.url);
    }
  }
  res.end();
});

app.ws("/:channel", function(ws, req) {
  let connect = {};
  connect.client = ws;
  connect.channel = req.params.channel;
  connections.push(connect);

  ws.on("close", function() {
    for (let i = 0; i < connections.length; i++) {
      if (connections[i].client === ws) {
        connections.splice(i, 1);
      }
    }
  });
});

app.listen(3000);
