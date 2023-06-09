console.log("연결!");

var name = "홍길동";
console.log(name);

//재선언
var name = "이몽룡";
console.log(name);

/* let
    1. 재선언 불가
    2. 재할당 가능
    3. 선언과 동시에 초기화하지 않아도 됨
*/

let a = 1;
a = 2;
console.log(a);

let aa;
aa = 123;

/* const
    1. 재선언 불가
    2. 재할당 불가
    3. 선언과 동시에 초기화 해야됨
*/

const b = 3;
console.log(b);

let q1 = 2;

q1 = q1 - 2; // =하나는 대입
console.log(q1);

const q2 = 5;
// q2 = q2 - 5;

// 식별자(변수,함수)이름 규칙
// 1. 특수문자는 $ _ 만 가능
// 2. 숫자가 맨 처음이면 안됨
// 3. 예약어 금지 (let,const,var,if,for)
let $ = 5;
console.log($);

let _ = 6;
console.log(_);

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

draw();
