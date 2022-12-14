const express = require("express");
const path = require("path");
const app = express();

app.get("/", (reg, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);
