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

if(localStorage.getItem("Carrito") != null){
    carrito = JSON.parse(localStorage.getItem("Carrito"));
    for (let carro of carrito){
        let fila = document.createElement("tr");
                fila.innerHTML= `<td>${carro.nombre}</td>
                                <td>$${carro.precio}</td>`
                tablaBody.append(fila);
    }
}