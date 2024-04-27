document.getElementById('cart-toggle').addEventListener('click', function() {
    console.log("Clic en el icono de carrito");
    document.querySelector('.cart').classList.toggle('cart--open');
});

document.getElementById('cart-close').addEventListener('click', function() {
    console.log("Clic en el icono de cerrar carrito");
    document.querySelector('.cart').classList.remove('cart--open');
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu--open');
});

document.getElementById('menu-close').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('menu--open');
});

// Selecciona todos los botones "Agregar al carrito" y agrega un evento de clic a cada uno
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentNode;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        const imgSrc = product.querySelector('img').getAttribute('src');
        addToCart(productName, productPrice, imgSrc);
    });
});

// Función para agregar un producto al carrito
function addToCart(name, price, imgSrc) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');

    // Imagen del producto
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = name;
    cartItem.appendChild(img);

    // Nombre y precio del producto
    const itemName = document.createElement('p');
    itemName.textContent = name;
    cartItem.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    cartItem.appendChild(itemPrice);

    // Botón para eliminar el producto del carrito
    const deleteIcon = document.createElement('i');
    deleteIcon.innerHTML = `<img src="img/quitar.png" class="cart__item-delete-icon" alt="Icono Quitar">`;
    deleteIcon.addEventListener('click', () => {
        cartItem.remove(); // Elimina el elemento del carrito
        updateCartItemCount(-1); // Disminuye el contador de productos
    });
    cartItem.appendChild(deleteIcon);

    // Agrega el elemento del producto al carrito
    const cart = document.querySelector('.cart');
    cart.appendChild(cartItem);

    // Aumenta el contador de productos y actualiza el badge
    updateCartItemCount(1);
}

let cartItemCount = 0;

// Actualizar el contador en el badge
function updateCartItemCount(count) {
    cartItemCount = parseInt(cartItemCount) + count;
    localStorage.setItem('cartItemCount', cartItemCount);
    updateCartBadge();
}

// Actualizar el badge del carrito con el contador actualizado
function updateCartBadge() {
    const cartBadge = document.querySelector('.cart__badge');
    cartBadge.textContent = cartItemCount;
}
