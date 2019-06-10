addToCartButtons = document.querySelectorAll('.product__add');
quantityButtons = document.querySelectorAll('.product__quantity-controls');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart);
}

for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener('click', changeQuantity);
}

function addToCart() {

    let currentProduct = this.closest('.product');
    let data_id = currentProduct.dataset.id;
    let currentQuantity = Number(currentProduct.querySelector('.product__quantity-value').innerText);
    let currentImageSrc = currentProduct.querySelector('img').getAttribute('src');
    let cart = document.querySelector('.cart__products');

    let pruductInCart = cart.querySelector('.cart__product[data-id="' + data_id + '"]');

    if (pruductInCart != null ) {
        let totalCount = Number(pruductInCart.querySelector('.cart__product-count').innerText) + currentQuantity;
        pruductInCart.querySelector('.cart__product-count').innerText = totalCount;
    }
    else {
        cart.innerHTML += `
        <div class="cart__product" data-id="${data_id}">
            <img class="cart__product-image" src="${currentImageSrc}">
            <div class="cart__product-count">${currentQuantity}</div>
        </div>          
        `;
    }

    return false;    

}

function changeQuantity() {

    let currentQuantity = Number(this.querySelector('.product__quantity-value').innerText);

    if (event.target.classList.contains('product__quantity-control_dec')) {
        currentQuantity = (currentQuantity > 1) ? currentQuantity - 1 : 1;
    }
    else {
        currentQuantity += 1;
    }

    this.querySelector('.product__quantity-value').innerText = currentQuantity;

}