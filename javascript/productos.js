class Producto {
    constructor (id,nombre,precio,imagen){
        this.id= parseInt(id),
        this.nombre= nombre,
        this.precio= parseFloat(precio),
        this.imagen= imagen
    }
}

//Array de productos
const productos = [];

class Carrito {
    constructor(nombre,precio){
        this.nombre=nombre,
        this.precio=parseFloat(precio)
    }
}
let carrito = [];

