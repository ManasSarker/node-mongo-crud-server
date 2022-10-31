const express = require("express");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from node mongo crud server in ");
});

app.listen(port, () => {
  console.log("this is running in ", port);
});
