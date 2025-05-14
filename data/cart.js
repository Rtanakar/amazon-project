export const cart = [];

// Create Add To Cart Function
export function addToCart(productId) {
  // The variable to check the Matching Item
  let matchingItem;

  // Check if the product is already in the cart.
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
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
}
