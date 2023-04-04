// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back();
  console.log(txt + "실행했구나");
  let txt2 = await hell();
  console.log("여기는" + txt2);
}

exec();

// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function changeColor(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      resolve(color);
    }, 1000);
  });
}

changeColor("red")
  .then(function () {
    return changeColor("orange");
  })
  .then(function () {
    return changeColor("yellow");
  })
  .then(function () {
    return changeColor("green");
  })
  .then(function () {
    return changeColor("blue");
  })
  .then(changeColor(red));
