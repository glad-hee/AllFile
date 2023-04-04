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

    // Create increase button
    const increaseButton = document.createElement("button");
    increaseButton.innerText = "+";
    increaseButton.addEventListener("click", () => {
      increaseQuantity(item);
    });
    li.appendChild(increaseButton);

    // Create decrease button
    const decreaseButton = document.createElement("button");
    decreaseButton.innerText = "-";
    decreaseButton.addEventListener("click", () => {
      decreaseQuantity(item);
    });
    li.appendChild(decreaseButton);

    cartItemsElement.appendChild(li);
  });

  document.querySelector(
    ".cart-total"
  ).innerHTML = `Total $${cart.total.toFixed(2)} - Quantity: ${cart.quantity}`;
}

function increaseQuantity(item) {
  item.quantity++;
  item.totalPrice = item.quantity * item.price;
  cart.total += item.price;
  cart.quantity++;
  renderCart();
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--;
    item.totalPrice = item.quantity * item.price;
    cart.total -= item.price;
    cart.quantity--;
    renderCart();
  }
}

function renderCart() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.innerHTML = "";

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - Quantity: ${
      item.quantity
    } - Price: $${item.totalPrice.toFixed(2)}`;

    // Create increase button
    const increaseButton = document.createElement("button");
    increaseButton.innerText = "+";
    increaseButton.addEventListener("click", () => {
      increaseQuantity(item);
    });
    li.appendChild(increaseButton);

    // Create decrease button
    const decreaseButton = document.createElement("button");
    decreaseButton.innerText = "-";
    decreaseButton.addEventListener("click", () => {
      decreaseQuantity(item);
    });
    li.appendChild(decreaseButton);

    cartItemsElement.appendChild(li);
  });

  document.querySelector(".cart-total");
}
