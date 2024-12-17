export let cart = [];

// 👉 Add to Cart Function
export const addToCart = (productId) => {
  let matchingProduct;

  cart.forEach((item) => {
    if (productId === item.productId) {
      // Store matching prduct into another variable
      matchingProduct = item;
    }
  });

  // Make Select Box Interactive
  const selectedQuantityInput = document.querySelector(
    `.js-quantity-select-${productId}`
  ).value;

  const selectedQuantity = Number(selectedQuantityInput);

  if (matchingProduct) {
    matchingProduct.quantity += selectedQuantity;
  } else {
    cart.push({
      productId,
      quantity: selectedQuantity,
    });
  }
};
