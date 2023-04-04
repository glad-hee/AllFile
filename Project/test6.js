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
