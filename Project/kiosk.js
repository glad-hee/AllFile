const product = [
  {
    name: "장미",
    img: "./daisies-3439573_960_720.jpg",
    priceView: "$10.00",
    price: 10,
  },
  {
    name: "백합",
    img: "./lilies-of-the-valley-4240129_960_720.jpg",
    priceView: "$13.00",
    price: 13,
  },
  {
    name: "해바라기",
    img: "./sunflower-1627193_960_720.jpg",
    priceView: "$12.00",
    price: 12,
  },
];

function openModal(index) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("body").style.opacity = "0.5";

  document.getElementById("modal-image").src = product[index].img;
  document.getElementById("modal-image").alt = product[index].name;
  document.querySelector("h3").innerHTML = product[index].name;
  document.getElementById("product-price").innerHTML = product[index].priceView;

  document.getElementById("purchase").onclick = function () {
    addToCart(index);
    closeModal();
  };
}

const cart = {
  items: [],
  total: 0,
  quantity: 0,
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("body").style.opacity = "1";
}

function addToCart(index) {
  const selectedProduct = product[index];
  const cartItem = cart.items.find(
    (item) => item.name === selectedProduct.name
  );
  if (cartItem) {
    cartItem.quantity++;
    cartItem.totalPrice = cartItem.quantity * selectedProduct.price;
  } else {
    cart.items.push({
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
      totalPrice: selectedProduct.price,
    });
  }
}

console.log("오류없음@");
