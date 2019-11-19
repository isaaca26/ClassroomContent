const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const ws = expressWs.getWss("/");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/", function(req, res) {
  ws.clients.forEach(function(client) {
    client.send(req.body.url);
  });
  res.end();
});

app.ws("/", function(ws, req) {
  console.log("user connected");
  /* ws.on('message', function(msg) {
    console.log(msg);
  }); */
});

app.listen(3000);
