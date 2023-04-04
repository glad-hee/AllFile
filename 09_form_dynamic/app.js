const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 3600;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// 1-1. /ajax 로 get요청
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 1-2. /ajax 로 post요청
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. /axios 로 get요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 2-2 /axios 로 post요청
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 3-1 /fetch 로 get요청
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 3-2 /fetch 로 post요청
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
