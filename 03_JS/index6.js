console.log("hi");

// 1. if문
/* if (5 > 3) {
  console.log("얍");'
}

let number = Number(prompt("숫자를 입력해 주세요."));
// number = Number(number);
console.log(typeof number);

if (number > 10) {
  console.log("이 수는 10보다 큽니다");
} else {
  console.log("이 수는 10보다 작거나 같습니다");
}

if (number > 10) {
  console.log("이 수는 10보다 큽니다");
} else if (number === 10) {
  console.log("입력한 수는 10이네요!");
} else {
  console.log("입력한 수는 10보다 작습니다");
}

if (number > 100 || number < 0) {
  console.log("입력값이 잘못되었습니다");
} else if (number >= 90) {
  console.log("A");
} else if (number >= 80) {
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
}

let age = Number(prompt("나이를 입력해 주세요"));

if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
} else if (age < 0) {
  console.log("잘못입력했습니다");
} else {
  console.log("유아");
} */

// db
let userId = "user01";
let userPw = "1234qwer";
function loginUser() {
  let inputId = prompt("아이디를 입력해주세요");
  let inputPw = prompt("비밀번호를 입력해주세요");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공");
    } else {
      alert("비밀번호가 틀렸습니다");
    }
  } else if (inputId === "") {
    alert("아이디를 입력하지 않았습니다");
  } else {
    alert("아이디가 틀렸습니다");
  }
}

// loginUser();

// 2. switch
let a = 3;
switch (a) {
  case 3:
    console.log("a가 3이군요");
  case 4:
    console.log("a가 4군요");
    break;
  case 5:
    console.log("a가 5군요");

  default:
    console.log("a가 무슨 수인지모르겠습니다");
}

// switch 문으로 성적 산출 프로그램 변경!
// 조건 : 0~100 이외의 수는 들어오지 않는다 가정

/* let b = Number(prompt("성적을 입력해주세요"));
switch (parseInt(b / 10)) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("B");
    break;
  case 8:
    console.log("C");
    break;
  case 7:
    console.log("D");
    break;
  default:
    console.log("F");
}
*/
// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let now = new Date().getHours();
console.log(now);

now >= 12 ? console.log("오후") : console.log("오전");

console.log(now < 12 ? "오전" : "오후");

let time = now < 12 ? "오전" : "오후";
console.log(time);
