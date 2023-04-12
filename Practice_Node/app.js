const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 3500;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);

// 2-1. /axios 로 get요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 2-2 /axios 로 post요청
// app.post("/axios", (req, res) => {
//   const userId = "glad";
//   const userPw = "5656";
//   if (req.body.userId === userId && req.body.userPw === userPw) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else if (req.body.userId !== userId || req.body.userPw !== userPw) {
//     res.send({ isLogin: false });
//   }
// });

app.listen(PORT, () => {
  console.log("웹서버실행");
  console.log(`https://localhost:${PORT}`);
});
