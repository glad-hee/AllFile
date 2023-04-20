const myModal = new bootstrap.Modal("#exampleModal");
myModal.show();

document.querySelector("#msgAfter").textContent = `<input>`;
document.querySelector("#msgBefore").textContent = `</input>`;

let socket = io.connect();

let myNick = socket.on("connect", () => {
  console.log(socket.id);
});

// 이름 등록하기
function join() {
  socket.emit("setUser", document.querySelector("#username").value);
}

// 입장성공
socket.on("entrySuccess", (username) => {
  myNick = username;
  myModal.hide();
  console.log(myNick);
});

// 이름 중복일 때
socket.on("error", (msg) => {
  alert(msg);
});

// 채팅보내기
function sendKey() {
  if (document.querySelector("#message").value !== "") {
    const data = {
      myNick: myNick,
      msg: document.querySelector("#message").value,
    };

    socket.emit("send", data);
    document.querySelector("#message").value = "";
  }
}

// 메세지도착
socket.on("newMessage", (data) => {
  let chatList = document.querySelector(".chat-list");
  let div = document.createElement("div");
  let divName = document.createElement("div");
  let divChat = document.createElement("div");

  if (myNick === data.nick) {
    div.classList.add("my-chat");
    divName.classList.add("my-column");
    divName.textContent = `User`;
  } else {
    div.classList.add("other-chat");
    divName.classList.add("ohter-column");
    divName.textContent = `${data.nick}`;
  }

  divChat.textContent = `${data.msg}`; // Nodm
  // divChat.textContent = divChat.textContent + `${data.nick} : ${data.msg}`;

  div.append(divName);
  div.append(divChat);

  chatList.append(div);

  chatList.scrollTop = chatList.scrollHeight;
});

// 리스트 업데이트
socket.on("updateUsers", (obj) => {
  let users = ``;

  for (let key in obj) {
    users += `<li class='${key}' onclick="tabMenu()">${obj[key]}</li>`;
  }
  document.querySelector(".userList").innerHTML = users;
});

function testtest() {
  console.log("click testtest");
}
socket.on("entry", (msg) => {
  let notice = document.querySelector(".chat-list");
  let div = document.createElement("div");

  div.classList.add("notice");

  div.textContent = `${msg}`;

  notice.append(div);
});

socket.on("out", (msg) => {
  let notice = document.querySelector(".chat-list");
  let div = document.createElement("div");

  div.classList.add("notice");

  div.textContent = `${msg}`;

  notice.append(div);
});

function tabMenu() {
  // let newBox = document.querySelector(".chat-box");
  // let div = document.createElement("div");
  // let divName = document.createElement("div");
  // let divChat = document.createElement("div");
  // socket.emit("selectUser", {});
  console.log(event.currentTarget.className); // 그 사람의 socket.id값

  // 해당 socket.id를 가진 사람과 1대1대화 나는 빼고 if문
  if (event.currentTarget.className !== socket.id) {
    console.log("ohter");
    socket.emit("selectUser", event.currentTarget.className);
  } else {
    console.log("me");
  }
}

socket.on("dm", () => {
  // 탭 생성
  // 뼈대 생성
  // append달면 굳이 반복문?
  // 탭
  let li = document.createElement("li");
  let btn = document.createElement("button");
});
