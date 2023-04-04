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

const cart = {
  items: [],
  total: 0,
  quantity: 0,
};

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

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("body").style.opacity = "1";
}

const bodyElem = document.querySelector(".window");

const closewindow = (event) => {
  const modalWrapperElem = document.getElementById("modal");
  bodyElem.removeChild(modalWrapperElem);
};

const stopPropagation = (e) => {
  e.stopPropagation();
};

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

  cart.total += selectedProduct.price;
  cart.quantity++;

  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.innerHTML = "";

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - Quantity: ${
      item.quantity
    } - Price: $${item.totalPrice.toFixed(2)}`;

    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.addEventListener("click", () => {
      plusQuantity(item);
      updateCart();
    });
    li.appendChild(plusButton);

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.addEventListener("click", () => {
      minusQuantity(item);
      updateCart();
    });
    li.appendChild(minusButton);

    cartItemsElement.appendChild(li);
  });

  document.querySelector(
    ".cart-total"
  ).innerHTML = `Total $${cart.total.toFixed(2)} - Quantity: ${cart.quantity}`;

  console.log(cart);
}

function updateCart() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.innerHTML = "";

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - Quantity: ${
      item.quantity
    } - Price: $${item.totalPrice.toFixed(2)}`;

    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.addEventListener("click", () => {
      plusQuantity(item);
      updateCart();
    });
    li.appendChild(plusButton);

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.addEventListener("click", () => {
      minusQuantity(item);
      updateCart();
    });
    li.appendChild(minusButton);

    cartItemsElement.appendChild(li);
  });

  document.querySelector(
    ".cart-total"
  ).innerHTML = `Total $${cart.total.toFixed(2)} - Quantity: ${cart.quantity}`;
}

function plusQuantity(item) {
  item.quantity++;
  item.totalPrice = item.quantity * item.price;
  cart.total += item.price;
  cart.quantity++;
}

function minusQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--;
    item.totalPrice = item.quantity * item.price;
    cart.total -= item.price;
    cart.quantity--;
  } else if (item.quantity === 1) {
    const index = cart.items.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    cart.items.splice(index, 1);
  }
}
