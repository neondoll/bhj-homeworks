const cartProductsElement = document.querySelector('.cart__products');

Array.from(document.getElementsByClassName('product')).forEach((productElement) => {
  const productQuantityValueElement = productElement.querySelector('.product__quantity-value');

  Array.from(productElement.getElementsByClassName('product__quantity-control')).forEach((productQuantityControlElement) => {
    productQuantityControlElement.addEventListener('click', function (event) {
      const productQuantityValue = Number(productQuantityValueElement.textContent);

      switch (true) {
        case event.target.classList.contains('product__quantity-control_dec') && productQuantityValue > 1:
          productQuantityValueElement.innerText = String(productQuantityValue - 1);
          break;
        case event.target.classList.contains('product__quantity-control_inc'):
          productQuantityValueElement.innerText = String(productQuantityValue + 1);
          break;
      }
    });
  });

  productElement.querySelector('.product__add').addEventListener('click', function (event) {
    const cartProductElement = cartProductsElement.querySelector(`.cart__product[data-id="${productElement.dataset.id}"]`);

    if (cartProductElement) {
      const cartProductCountElement = cartProductElement.querySelector('.cart__product-count');
      cartProductCountElement.innerText = String(Number(cartProductCountElement.textContent) + Number(productQuantityValueElement.textContent));
    } else {
      const productImageElement = productElement.querySelector('.product__image');

      const newCartProductImageHTML = `<img class="cart__product-image" src="${productImageElement.src}" alt="${productImageElement.alt}">`;
      const newCartProductCountHTML = `<div class="cart__product-count">${productQuantityValueElement.textContent}</div>`;
      const newCartProductHTML = `<div class="cart__product" data-id="${productElement.dataset.id}">${newCartProductImageHTML}${newCartProductCountHTML}</div>`;

      cartProductsElement.insertAdjacentHTML('beforeend', newCartProductHTML);
    }
  });
});