const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 3400;

app.set("view engine", "ejs"); // views engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views폴도 경로 설정

app.use(express.urlencoded({ extended: true })); // post요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json형태로 데이터를 주고 받음
app.use("/static", express.static(__dirname + "/static"));
app.get("/getForm", (req, res) => {
  //   console.log(req); // xx:() y:() ... query : id~~~ pw~~~
  console.log(req.query); // id : ~~ pw: ~~~
  //   res.send("get요청 성공!");
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    pw: req.query.pw, // req.query.name name은 html에서 name값 불러옴
    id: req.query.id,
    // email: req.query.email,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body); // id:~~ pw:~~~
  //   res.send("post요청 성공!");

  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    id: req.body.id, // req.body.name name은 html에서 name값 불러옴
    pw: req.body.pw,
  });
});

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을떄 어떤 페이지를 보여줄 것인가

// localhost:port/ 접속했을 떄 index.ejs를 보여주겠다
app.get("/", (req, res) => {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다";
  res.render("index", { title: myTitle, name: "fff" });
});

app.listen(PORT, () => {
  console.log("웹 서버 실행!!");
  console.log(`https://localhost:${PORT}`);
});
