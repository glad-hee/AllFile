// Frontend js

// socket 사용하기 위한 객체
let socket = io.connect();

// 나의 닉네임
let myNick = socket.on("connect", () => {
  console.log("🙉Client Socket Connected >>", socket.id);
});

// Practice 1
// function sayHello() {
//   // client => server 정보 보내기
//   // socket.emit(event, data) : 데이터 전송
//   // => event 라는 이름으로 data 전송
//   socket.emit("hello", { who: "client", msg: "hello" });

//   // socket.on(event, callback) : 데이터 '받음'
//   // event에 대해서 정보를 받아 'callback' 실행

//   socket.on("helloKr", (data) => {
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }
// function sayStudy() {
//   socket.emit("study", { who: "client", msg: "study" });

//   socket.on("goStudy", (data) => {
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }
// function sayBye() {
//   socket.emit("bye", { who: "client", msg: "bye" });

//   socket.on("goBye", (data) => {
//     document.querySelector(
//       "#form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }

// Practice 3
socket.on("notice", (msg) => {
  document
    .querySelector(".chat-list")
    .insertAdjacentHTML("beforeend", `<div class='notice'>${msg}</div>`);
});

function entry() {
  socket.emit("setNick", document.querySelector("#nickname").value);
}

socket.on("entrySuccess", (nickname) => {
  // 1. 내 닉네임 설정
  myNick = nickname;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력비활
  document.querySelector(".entry-box > button").disabled = true; // 버튼비활

  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});

// 닉네임중복 -> alert띄우기
socket.on("error", (msg) => {
  alert(msg);
});

// 닉네임 리스트 객체 업데이트 이벤트
socket.on("updateNicks", (obj) => {
  let options = `<option value='all'>전체</option>`;

  // select Nick-list
  for (let key in obj) {
    options += `<option value='${key}'>${obj[key]}</option>`;
  }

  //   select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});

// 퇴장시
socket.on("exit", (msg) => {
  document
    .querySelector(".chat-list")
    .insertAdjacentHTML("beforeend", `<div class='notice'>${msg}</div>`);
});

// 채팅창 메시지 전송
// send 이벤트 전송
function send() {
  const data = {
    myNick: myNick,
    msg: document.querySelector("#message").value,
    dm: document.querySelector("#nick-list").value, // option의 value값
  };
  socket.emit("send", data);
  document.querySelector("#message").value = "";
}

socket.on("newMessage", (data) => {
  let chatList = document.querySelector(".chat-list");
  let div = document.createElement("div"); // my-chat other-chat
  let divChat = document.createElement("div");

  //   새 메세지가 도착했는데 mynick에 저장된 내 닉네임과 같으면

  // divChat에 textContent값 추가 nick:msg

  //   div를 chatlist에 추가
  //   스크롤 하단고정법 의구하기
  if (myNick === data.nick) {
    div.classList.add("my-chat");
  } else {
    div.classList.add("other-chat");
  }

  // DM
  if (data.dm) {
    div.classList.add("secret-chat");
    divChat.textContent = data.dm;
  }

  //   divChat.textContent = `${data.nick} : ${data.msg}`; // Nodm
  divChat.textContent = divChat.textContent + `${data.nick} : ${data.msg}`;

  div.append(divChat);

  chatList.append(div);

  chatList.scrollTop = chatList.scrollHeight;
});
