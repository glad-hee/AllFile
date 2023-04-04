const flowers = [
  {
    image: "./red-374318_960_720.jpg",
    meaning:
      "당신은 내 인생의 프라이빗 가든, 내게는 없어서는 안 될 소중한 존재입니다",
    alt: "Rose",
  },
  {
    image: "./tulips-3389122_960_720.jpg",
    meaning:
      "당신과 함께한 시간은 나에게 불어오는 새로운 기운과 함께, 언제나 봄 같은 기분을 선사해 줍니다",
    alt: "Tulip",
  },
  {
    image: "./lilies-of-the-valley-4240129_960_720.jpg",
    alt: "Lily",
    meaning: "당신은 나의 일생에 꽃보다 빛나는 귀한 인연입니다",
  },
  {
    image: "./daisies-3439573_960_720.jpg",
    alt: "Daisy",
    meaning: "당신과 함께한 순간은 새로운 시작과 희망을 불러일으킵니다",
  },
  {
    image: "./background-21745_960_720.jpg",
    alt: "Hyacinth",
    meaning:
      "당신의 존재가 내 마음의 정원에 뿌리를 내리게 하고, 빛과 희망으로 가득 채워줍니다",
  },
];

function showRandomFlower() {
  const randomIndex = Math.floor(Math.random() * flowers.length);
  const randomFlower = flowers[randomIndex];

  document.getElementById("bg-img").src = randomFlower.image;
  document.getElementById("bg-img").alt = randomFlower.alt;
  document.getElementById("flower-name").innerHTML = randomFlower.alt;
  document.getElementById("flower-language").textContent = randomFlower.meaning;
}

window.onload = function () {
  showRandomFlower();
};

console.log("오류찾기");
