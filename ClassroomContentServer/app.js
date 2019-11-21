"use strict";

const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const wss = expressWs.getWss("/");
const bodyParser = require("body-parser");

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
  console.log(req.body);
  wss.clients.forEach(function(client) {
    client.send(req.body.url);
  });
  res.end();
});

let connections = {};
app.ws("/", function(ws, req) {
  //console.log("user connected");
  //console.log(req);
  //console.log(ws);
  //console.log(req);
  /* ws.on('message', function(msg) {
    console.log(msg);
  }); */
  ws.on("connection", req => {
    req.id = uuid.v4();
    connections[req.id] = req;
    //console.log(connections);
    //console.log(req);
  });

  ws.on("close", function(req) {
    //console.log(req);
    //console.log("user disconnected");
  });
});

app.listen(3000);
