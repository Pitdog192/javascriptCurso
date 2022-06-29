//Suma el precio total de todos los productos en el carrito
const sumaPrecios = () => {
    if(Object.keys(carrito).length === 0){
        totalCarro.innerText= `$0`
    } else {
        const sumarProductos = Object.values(carrito).map(producto => producto.precio * producto.cantidad).reduce((acc, precio) => acc + precio, 0);
        totalCarro.innerText= `$${sumarProductos}`;
        console.log(sumarProductos);
    }
}

//Captura el botón para el evento
const capturaEvento = (e) => {
    if (e.target.classList.contains('btn')){
        manejaCantidad(e.target.parentElement);
    }
    e.stopPropagation();
}

//Pasa el producto de la lista al carrito y le suma cantidad 
const manejaCantidad = (producto) => {
    const objeto = {
    id: parseInt(producto.querySelector('.btn').dataset.id),
    nombre: producto.querySelector('h5').textContent ,
    precio: parseFloat(producto.querySelector('p').textContent),
    cantidad: 1,
    }
    if(carrito.hasOwnProperty(objeto.id)){
        objeto.cantidad =  carrito[objeto.id].cantidad +1 ;
    }

    carrito[objeto.id] = {...objeto};
    dibujaCarro();
    alertasimple('success', 'Agregado', 'Producto agregado con éxito');
}

//Pinta el carro con los productos que tenga
const dibujaCarro = () => {
    tablaBody.innerHTML="";  
    Object.values(carrito).forEach((producto) =>{
        tablaBody.innerHTML+= `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>$${producto.precio}</td>
                        <td><button class="btn btn-danger elimProd" id="${producto.id}" data-id="${producto.id}">X</button></td>
                    </tr>    `;
        tabla.append(tablaBody);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        sumaPrecios();
    });
}

//Evento del boton de cada producto en el carrito para eliminarlo
const capturaBtnBorrar = (e) => {
    if (e.target.classList.contains('elimProd')){
        localStorage.removeItem(carrito[e.target.dataset.id]);
        delete carrito[e.target.dataset.id];
        if(Object.keys(carrito).length === 0){
            localStorage.clear();
        }
        sumaPrecios();
        alertasimple('success','Eliminado','Producto eliminado')
        dibujaCarro();
    }
    e.stopPropagation();
}











