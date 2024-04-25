console.log("Script cargado correctamente");

document.getElementById('cart-toggle').addEventListener('click', function() {
    console.log("Clic en el icono de carrito");
    document.querySelector('.cart').classList.toggle('cart--open');
});

document.getElementById('cart-close').addEventListener('click', function() {
    console.log("Clic en el icono de cerrar carrito");
    document.querySelector('.cart').classList.remove('cart--open');
});

