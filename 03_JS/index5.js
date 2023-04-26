console.log("hi");

function helloworld1() {
  console.log("helloworld1");
}

helloworld1();

function helloworld2() {
  return "helloworld2";
}

helloworld2();
console.log(helloworld2());

// function add(num1, num2) {
//   console.log("안녕");
//   return num1 + num2;
// }

// function add2(num1, num2) {
//   console.log(num1 + num2);
// }
// let result = add(5, 5);
// let result2 = add2(5, 5);

// console.log(result, result2);

// 함수표현식

let helloworld3 = function () {
  console.log("helloworld3");
};

helloworld3();

// 화살표함수
let helloworld4 = () => {
  console.log("helloworld4");
};
helloworld4();

// 매개 변수 있는 version
function sayHello1(text) {
  return text;
}

console.log(sayHello1("아녕"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("hi", "hiii"));

function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 2));
console.log(multifly(3, 7));

let square = (num3) => {
  console.log(num3 ** 2);
};

square(7);
