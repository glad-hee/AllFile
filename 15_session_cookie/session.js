const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
// dotenv : 환경변수를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

dotenv.config();
// process.env.xxx
console.log(process.env.SECRET_KEY);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({session module options})
// 브라우저 단으로 생성
// - secret : 세션 발급시 사용되는 키 (임의변조 방지)
// - resave : 세션 수정사항이 안 생겨도 매 요청마다 다시 저장할건지
// - saveUnintialized : 세션에 저장할 내용이 없더라도 처음부터 세션 생성할지
// - secure : https 프로토콜에서만 세션을 주고받을건지
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 없션(세션 암호화할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // nomarly false
  })
);
// 세션 설정
// req.session.key = value

// 세션 읽기(사용)
// req.session.key

// 세션 삭제
// req.session.destroy(callback_function)

app.get("/", (req, res) => {
  res.render("session");
});

app.get("/set", (req, res) => {
  // 세션 설정
  req.session.name = "최희성";
  // 응답
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  // req.sessionID : 현제 세션의 ID(서버가 클라이언트를 구별하기위해
  // 고유로 부여되는 값) -> 브라우저단위
  // req.session.key
  res.send({
    id: req.sessionID,
    name: req.session.name,
  });
});

app.get("/destroy", (req, res) => {
  // req.session.destroy(세션 삭제시 호출할 콜백)
  // -> 세션 완전히 삭제하고 웹 사이트 접속할 때마다
  //    새로운 sessionID 할당
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }

    res.send("세션 삭제 완료");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// hint
// res.render('ejsfile', {userid : req.session.userid})
