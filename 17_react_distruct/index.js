// map()
const list = ["a", "b", "c", "d", "e"];

// 일반 for
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// map
const items = list.map((txt, id, arr) => {
  console.log("txt:", txt); // 원소값
  console.log("id:", id); // 인덱스 위치
  console.log("arr:", arr); // 현재 순회하고있는 배열 전체
  return `${id} 위치에 ${txt} 원소가 있음`;
});

console.log("items > ", items);
