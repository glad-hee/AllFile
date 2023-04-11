const myModal = new bootstrap.Modal("#exampleModal");
console.log(myModal);

// 접속시 쿠키값 x => 모달띄우기
// o => 모달 안 띄우기 if

// 쿠키가 있는지 어떻게 확인할건가.

// 체크박스 선택하고 닫기 누르면 쿠키저장
// 닫기에 onclick
// if문 기반 axios로 쿠키설정

// document.querySelector("h2").addEventListener(onload, ()=> {
//     if ()
// })

const check = document.querySelector("h2").classList.contains("있");

// ejs파일가서 달아라
console.log("<%= data %>");

if (!check) {
  myModal.show();
} else {
  myModal.hide();
}

function cookieModal() {
  if (document.querySelector("#cookie").checked) {
    console.log("check");

    axios({
      method: "POST",
      url: "/cookie",
    }).then((res) => {
      console.log(res.data.cookie);
    });
  } else {
    console.log("dont check");
  }
}
