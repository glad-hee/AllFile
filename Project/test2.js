// JavaScript 코드
const products = [
  {
    id: 1,
    title: "상품 제목 1",
    description: "상품 설명 1",
    price: 10,
  },
  {
    id: 2,
    title: "상품 제목 2",
    description: "상품 설명 2",
    price: 20,
  },
  {
    id: 3,
    title: "상품 제목 3",
    description: "상품 설명 3",
    price: 30,
  },
];

let cart = [];
let total = 0;

function addToCart() {
  const product = products.find((p) => p.id === 1); // 상품 ID를 수정해주세요
  cart.push(product);
  total += product.price;
  renderCart();
}

function removeFromCart(index) {
  const product = cart[index];
  cart.splice(index, 1);
  total -= product.price;
  renderCart();
}

function changeQuantity(index, quantity) {
  const product = cart[index];
  total -= product.price * product.quantity;
  product.quantity = quantity;
  total += product.price * product.quantity;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.title} - $${product.price} x 
        <input type="number" value="${product.quantity}" 
          onchange="changeQuantity(${index}, this.value)"> 
        <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });

  const cartTotal = document.getElementById("cart-total");
  cartTotal.innerHTML = `총 가격: $${total}`;

  const cartSection = document.getElementById("cart");
  cartSection.style.display = "block";
}
