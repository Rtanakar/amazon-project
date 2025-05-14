const cart = []; // Button fucntionality
document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    // The variable to get the Product Name
    const productId = button.dataset.productId;

    // The variable to check the Matching Item
    let matchingItem;

    // Check if the product is already in the cart.
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    // if it is in the cart, increase the quantity.
    if (matchingItem) {
      matchingItem.quantity += 1;
    }

    // if it's not in the cart, add it to the cart.
    else {
      cart.push({
        productId,
        quantity: 1,
      });
    }

    // This variable to Add to cart
    let cartQuantity = 0;

    // This is cart item to increase add cart Item
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

    console.log(cartQuantity);

    console.log(cart);
  });
});
