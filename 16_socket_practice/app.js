const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index");
});

// 접속인원저장
const userObj = {};

// 접속 업데이트
function updateUserList() {
  io.emit("updateUsers", userObj);
}

io.on("connection", (socket) => {
  // 입장시 닉네임 중복확인
  socket.on("setUser", (userName) => {
    if (Object.values(userObj).indexOf(userName) > -1) {
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      userObj[socket.id] = userName;
      io.emit("entry", `<!-- ${userName}님이 입장하였습니다 -->`);
      socket.emit("entrySuccess", userName);
      updateUserList();
    }
  });

  // 퇴장시
  socket.on("disconnect", () => {
    if (userObj[socket.id] != undefined) {
      io.emit("out", `<!-- ${userObj[socket.id]} 님이 퇴장하였습니다 -->`);
      delete userObj[socket.id];
      updateUserList();
    }
  });

  // 메시지전송
  socket.on("send", (obj) => {
    const sendData = { nick: obj.myNick, msg: obj.msg };
    io.emit("newMessage", sendData);
  });

  // DM Tab
  socket.on("selectUser", (userId) => {
    io.to(userId).emit("dm");
  });
});

http.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
