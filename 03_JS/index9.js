// JS 표준 내장 객체
// 자바스크립트가 기본적으로 가지고 있는 객체
/*
Object
Array
String
Number
Boolean

Math
Date : 시간,날짜에 대한 정보를 얻기 위해 사용
*/
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년");
console.log(now.getMonth(), "월"); // 0~11
console.log(now.getDate(), "일");
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay());
// 0:일요일 6:토요일

// Date 객체를 이용해 오늘의 요일을 얻고
// 오늘이 평일인지 주말인지 만들기

if (now.getDay() === 0) {
  console.log("일요일");
} else if (now.getDate() === 1) {
  console.log("월요일");
} else if (now.getDate() === 2) {
  console.log("화요일");
} else if (now.getDate() === 3) {
  console.log("수요일");
} else if (now.getDate() === 4) {
  console.log("목요일");
} else if (now.getDate() === 5) {
  console.log("금요일");
} else if (now.getDate() === 6) {
  console.log("토요일");
} else {
  console.log("일요일");
}

switch (now.getDate()) {
  case 0: //일
  case 6: //토
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}

// let day =now.getDate() === 0 || now.getDate() === 6 ? "주말" : console.log(day);

// Math 객체
// 속성
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2); // 루트2

// 메소드
console.log(Math.min(45, 2, 0, -5, 15));
console.log(Math.max(45, 2, 0, -5, 15));
console.log(Math.random()); // 0 <= x < 1
console.log(Math.ceil(5.1)); // 올림
console.log(Math.round(5.1)); // 반올림
console.log(Math.floor(5.5)); // 내림
console.log(Math.floor(Math.random() * 10)); // 0 <= ~ < 10

// 1 <= x < 101
console.log(Math.floor(Math.random() * 100 + 1));
