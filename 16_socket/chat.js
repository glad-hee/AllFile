const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("chat");
});

// 닉네임 관리객체
// 배열이 아닌 이유 => 배열은 순서가 있고 객체는 순서가 없고 겹치지않음
// { 소켓_아이디 : 닉네임 , ...}
// 객체 추가 방법
// nickObj.hello = '안녕'
// console.log(nickObj) : { hello : 안녕 }
// or nickObj[`apple`] = '사과'

// nickObj.socket.io : err
// nickObj[socket.io] : o
const nickObj = {};

// 닉네임리스트 객체 업데이트
// 유저가 들어오거나 나갈 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}

// io.on(x,y) x = event name, y = callback
// x = socket과 관련된 통신작업 처리
io.on("connection", (socket) => {
  // "connection" = 클라와 서버가 연결됐을 때
  // 최초 입장시(연결)
  // socket.id = socket고유아이디 => 웹페이지 별로 생성
  //  -> 크롬에서 탭2개띄우면 socket.id 2개 생성
  console.log("🙈Server Socket Connected>>", socket.id);

  // Practice 1
  //   socket.on("hello", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("helloKr", { who: "희성", msg: "안녕" });
  //   });

  //   socket.on("study", () => {
  //     socket.emit("goStudy", { who: "희성", msg: "공부해!!" });
  //   });

  //   socket.on("bye", () => {
  //     socket.emit("goBye", { who: "희성", msg: "잘가~~" });
  //   });

  // Practice 3
  // 채팅창 입장안내문구

  socket.on("setNick", (nickname) => {
    console.log(nickname);

    // 닉네임 중복여부
    // Object.values(Obj) : value만 뽑아서 배열로 정리
    if (Object.values(nickObj).indexOf(nickname) > -1) {
      // 닉네임 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요!");
    } else {
      // 아이디 통과
      nickObj[socket.id] = nickname; // 프론트에서 입력한 닉네임
      io.emit("notice", `${nickname}님이 입장하였습니다.`);
      // 서버에 접속한 모든 클라에게 이벤트 전송
      socket.emit("entrySuccess", nickname);
      updateNickList(); // 닉네임 리스트 객체 업데이트
    }
  });

  //   퇴장시
  // disconnect 클라가 연결 끊었을 때 발생 (브라우저탭 닫기)
  socket.on("disconnect", () => {
    console.log("======🙈Server Socket Connected", socket.id);

    // delete obj[] or obj.xx
    //  xx님이 퇴장하였습니다 nickobj 삭제
    // 리스트 업데이트
    // io.emit("exit", nickObj[socket.id] + "님이 퇴장하였습니다");
    // delete nickObj[socket.id];
    // updateNickList();

    if (nickObj[socket.id] != undefined) {
      io.emit("exit", nickObj[socket.id] + "님이 퇴장하였습니다");
      delete nickObj[socket.id];
      updateNickList();
    } // exit -> notice 무방
  });

  // 채팅창 메시지 전송
  socket.on("send", (obj) => {
    console.log("socket on send >> ", obj); // { mynick : xx , msg : yy}

    //     const sendData = { nick: obj.myNick, msg: obj.msg };
    //     io.emit("newMessage", sendData);
    //   });

    // DM기능
    if (obj.dm !== "all") {
      // DM
      let dmSocketId = obj.dm;
      const sendData = { nick: obj.myNick, msg: obj.msg, dm: "(속닥속닥)" };
      io.to(dmSocketId).emit("newMessage", sendData);
      socket.emit("newMessage", sendData);
    } else {
      // ALL
      const sendData = { nick: obj.myNick, msg: obj.msg };
      io.emit("newMessage", sendData);
    }
  });
});

// Caution) socket을 사용할땐 http.listen으로 PORT 열어야함
http.listen(PORT, () => {
  console.log(`https//localhost:${PORT}`);
});

// for in 반복문 모든 object에 대해 접근
// for (let key in nickObj) {
//   console.log(key);
