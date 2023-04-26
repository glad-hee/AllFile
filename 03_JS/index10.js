// function goMart() {
//   console.log("마트고민");
// }

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민끝");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink(pay);

function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("promise 상태는 fulfilled! then으로 연결 이때 flag는 true");
    } else {
      reject("promise 상태는 rejected! catch로 연결 이때 flag는 false");
    }
  });
}

promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

// async . awiat
// 비동기처리 가장 최신 문법
// 구조 함수 앞에 async 붙이기
// 비동기 처리할 await키워드 붙이고 해당 작업을 기다려줄 것

function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍒", "🍕", "🍔"];
      resolve(fruits);
      //   reject(new Error("알 수 없는 에러 발생 아이템가져올 수 없뜸"));
    }, 1000);
  });
}

// #1 promise then() 사용시
// fetchFruits()
//   .then(function (fruits) {
//     console.log(fruits);
//   })
//   .catch(function (Error) {
//     console.log(Error);
//   });

// #2 async awiat
// 예외처리 try catch 구문
// 구조

/*
try {
  // 코드 실행 ing
  // 에러 발생시 catch로 이동
} catch (error) {
  //에러 관리
}
*/

// -try 블록 코드가 실행
// -try 블록에서 에러가 엇다면 .catch 블록은 건너뜀
// -try 블록에서 에러가 없다면 , try 블록 실행이 중단 -> catch블록 코드 실행

async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}

printItems();

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("고민 끝");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); // 1번실행
  await pickDrink(); // 2번실행 rlekfuwnjdigka
  pay(); // 2번 완료되고 나서야 실행

  // 장점 코드실행 순서가 명확히 보인다
}

let product;
let price;
exec();
