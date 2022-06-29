let carrito = {};

//Comprueba si el carrito tiene productos en el storage local
carrito = JSON.parse(localStorage.getItem("Carrito")) || {};

//Crear cards de productos que están en el json 
fetch('../data/productos.json')
    .then ( (resp) => resp.json())
    .then ( (data) => {
        data.forEach(producto => {
            templateCard.querySelector('img').setAttribute("src",producto.imagen);
            templateCard.querySelector('h5').textContent = producto.nombre;
            templateCard.querySelector('p').textContent = producto.precio;
            templateCard.querySelector('.btn').setAttribute("id", `btn${producto.id}`);
            templateCard.querySelector('.btn').dataset.id = producto.id;
            let clon = templateCard.cloneNode(true);
            divProd.appendChild(clon);
        });
    })
