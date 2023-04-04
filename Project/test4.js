const cartItemsElement = document.querySelector(".cart-items");
cartItemsElement.innerHTML = "";

cart.items.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `${item.name} - Quantity: ${
    item.quantity
  } - Price: $${item.totalPrice.toFixed(2)}`;

  // Create buttons for adjusting item quantity
  const plusButton = document.createElement("button");
  plusButton.innerText = "+";
  plusButton.addEventListener("click", () => {
    // Increase the quantity of the item
    item.quantity++;
    item.totalPrice = item.price * item.quantity;
    renderCartItems();
  });

  const minusButton = document.createElement("button");
  minusButton.innerText = "-";
  minusButton.addEventListener("click", () => {
    // Decrease the quantity of the item
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
      renderCartItems();
    }
  });

  // Add buttons to the item li element
  li.appendChild(plusButton);
  li.appendChild(minusButton);

  cartItemsElement.appendChild(li);
});

function renderCartItems() {
  // Re-render the cart items and total
  cartItemsElement.innerHTML = "";
  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - Quantity: ${
      item.quantity
    } - Price: $${item.totalPrice.toFixed(2)}`;

    // Create buttons for adjusting item quantity
    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.addEventListener("click", () => {
      // Increase the quantity of the item
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      renderCartItems();
    });

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.addEventListener("click", () => {
      // Decrease the quantity of the item
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
        renderCartItems();
      }
    });

    // Add buttons to the item li element
    li.appendChild(plusButton);
    li.appendChild(minusButton);

    cartItemsElement.appendChild(li);
  });

  document.querySelector(
    ".cart-total"
  ).innerHTML = `Total $${cart.total.toFixed(2)} - Quantity: ${cart.quantity}`;
}

// Initial render of cart items
renderCartItems();
