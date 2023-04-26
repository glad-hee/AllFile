// reduce(callback)
// 배열의 각 요소에 주어진 리듀서 함수를 실행하고 하나의 결과값으로 반환
const numbers = [1, 2, 3, 4, 5];

const reduce = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
});

// 1+2+3+4+5

const sum = numbers.reduce((a, b) => a + b);

// console.log(sum);

// acc : 누적합
const reduce2 = numbers.reduce((acc, currentValue, idx) => {
  console.log(`=========${idx}========`);
  console.log(`acc : ${acc}`);
  console.log(`currentValue : ${currentValue}`);
  return acc + currentValue;
});
