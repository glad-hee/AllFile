const express = require("express");
const app = express();
const PORT = 3700;

// multer 미들웨어 사용하기
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path불러오기(내장모듈) => 파일,폴더 경로를 쉽게 설정
// const upload = multer({
//   dest: "uploads/", // dest : 업로드 할 파일 경로 지정 dest만 적으면 지 알아서 저장함
// });

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //  destination : 경로 설정
      //  done : callback function
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // ex. apple.png 파일 업로드
      const ext = path.extname(file.originalname); // file.originalname에서 '확장자' 추출 => png
      // path.basename(file.originalname, ext) => apple (확장자 제거한 파일 이름만!!)
      // Date.now() => 현재 시간 (1680309345279)
      //   => 1970년 1월1일 0시 0분 0초를 기준으로 현재까지 경과된 밀리초
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
  // 5 *2^10 = 5KB
  // 5 *2^10 * 2^10 = 5MB
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// single() : 하나의 파일 업로드할 때
// single() 의 매개변수 : input의 name 과 일치시키기
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보
  /*
  {
  fieldname: 'userfile', // 폼에 정의한 name
  originalname: 'dog.jpg', // 사용자가 업로드한 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/jpeg', // 파일 mime타입
  destination: 'uploads/', // 파일 저장할 경로(폴더 dest)
  filename: '51c944aeb46e5adecff4a2fdc1431a01', // destination에 저장된 파일명
  path: 'uploads\\51c944aeb46e5adecff4a2fdc1431a01', // 업로드된 파일의 전체 경로
  size: 38523 // 파일 크기 (byte)
}
  */
  console.log(req.body); // 폼에 입력한 정보
  // [Object: null prototype] { title: 'dfff' } // input title 에 입력한 값

  res.send("upload 완료!!");
});

// array() : 여러 파일을 한 번에 업로드할 때 사용
app.post("/upload/array", uploadDetail.array("userfile"), (req, res) => {
  console.log(req.files); // [{},{},{}]
  console.log(req.body); // {title : 'xxx'}
  res.send("여러개 파일 업로드 완료~~");
});

// fields 각 파일이 객체로 들어옴
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files); // {userfile1:[{}], userfile2:[{}]} 형태로 파일정보 출력
    console.log(req.body); // {title: 'xx', title2:'yyy'}
    res.send("각각 여러 파일 업로드 완료");
  }
);

app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file); // 요청의 파일 정보 확인
    res.send(req.file); // 클라이언트에게 파일을 응답
    // render x  새로운 페이지가 아닌 현재 페이지에서 응답하기위해
  }
);

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
