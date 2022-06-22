class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = parseInt(id),
        this.nombre = nombre,
        this.precio = parseFloat(precio),
        this.imagen = imagen
    }
}

//Array de productos
const productos = [];

let carrito = {};

carrito = JSON.parse(localStorage.getItem("Carrito")) || {};

