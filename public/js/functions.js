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

