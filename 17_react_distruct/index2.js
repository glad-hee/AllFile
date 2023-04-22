// filter()
// -js 배열 내장 함수
// -주어진 함수의 테스트를 통과하는 모든 요소를모아서
// (true)면 요소유지 false면 버림 새로운 배열 반환

const animals = ["dog", "cat", "rabbit"];

// const newAnimals = animals.filter((el) => el.length > 3);

const newAnimals = animals.filter((animals) => {
  return animals.length > 3;
});

console.log(newAnimals);

const newAnimals2 = animals.filter((animals) => {
  return animals.includes("a");
});
console.log(newAnimals2);

// Quiz
const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", "rabbit", "apple", "wow"];

// 1. map() 이용해서 dobbleNums  배열에 [2,4,6,8,10]이 반환되도록 코드 작성
const dobbleNums = nums.map((txt) => {
  return txt * 2;
});
console.log(dobbleNums);

// 2. filter() 이용해서 글자에 t포함 필터링하는 newWords 배열 작성
const newWords = words.filter((el) => el.includes("t"));
console.log(newWords);

/////////////////////////////////////////////////////////////////

const tripleNums = nums.map((n) => n * 3);
console.log(tripleNums.includes(3)); // 3 원소가 있는가 => true
console.log(tripleNums.includes(7)); // 7 원소가 있는가 => false
console.log(tripleNums.indexOf(9)); // 9원소의 index => 2
console.log(tripleNums.indexOf(7)); // 7원소가 없으니 => -1

const aaa = ["a", "b", "c"];
const bbb = ["d", "e", "f"];

// concat() : 배열 합치기
console.log(aaa.concat(bbb));

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];

const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];

const arr3 = arr1.concat(arr2);
console.log(arr3);
