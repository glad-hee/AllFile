const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
// require: 폴더까지만 접근할 경우에 자동으로 index.js 찾아감
app.use("/", indexRouter);
// '/~~~~~~~' 모든 라우터를 /routes/index.js 에 정의해놨으니 저 파일 읽으삼

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
