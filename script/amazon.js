import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

// Variable of Set Product into the Webpage
let productHTML = "";

// Get the data from product
products.forEach((product) => {
  productHTML += `
        <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${
            product.rating.stars * 10
          }.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ₹${formatCurrency(product.priceCents)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${
          product.id
        }">
          Add to Cart
        </button>
      </div>
  `;
});

// Show the All Products
document.querySelector(".js-products-grid").innerHTML = productHTML;

// Create Update Cart Quantity function
function updateCartQuantity() {
  // This variable to Add to cart Quantity
  let cartQuantity = 0;

  // This is cart item to increase Add cart Item Quantity
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  // This is show webpage Add to cart Quantity
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

// Button fucntionality
document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    // The variable to get the Product Name
    const productId = button.dataset.productId;

    // Add to Cart function Call with Parameter
    addToCart(productId);

    // Call Update Cart Quantity function
    updateCartQuantity();
  });
});
