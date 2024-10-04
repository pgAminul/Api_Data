// make router using expreess js
const express = require("express");
const app = express();
const router = require("./userRouter");

app.use("/api/user", router);
app.get("/", (req, res) => {
  res.send(`<h1>Hello this is home router </h1>`);
});
app.use((req, res) => {
  res.send(`<h1> 404!! Router not founded </h1>`);
});

module.exports = app;
