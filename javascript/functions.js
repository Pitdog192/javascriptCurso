//Funcion para crear productos
const agregaProd = (id, nombre, precio, imagen) => productos.push(new Producto(id, nombre, precio, imagen));

//Para mostrar los productos
const mostrarProd = (contenido) => {
    contenido.forEach(producto => {
        templateCard.querySelector('img').setAttribute("src",producto.imagen);
        templateCard.querySelector('h5').textContent = producto.nombre;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('.btn').setAttribute("id", `btn${producto.id}`);
        templateCard.querySelector('.btn').dataset.id = producto.id;
        let clon = templateCard.cloneNode(true);
        divProd.appendChild(clon);
    });
}


//Suma el total de todos los productos en el carrito
const suma = () => {
    if(Object.keys(carrito).length === 0){
        totalCarro.innerText= `$0`
    } else {
        const sumarProductos = Object.values(carrito).map(producto => producto.precio * producto.cantidad).reduce((acc, precio) => acc + precio, 0);
        totalCarro.innerText= `$${sumarProductos}`;
    }
}

const capturaEvento = (e) => {
    if (e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = (producto) => {
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
    simple('success', 'Agregado', 'Producto agregado con éxito');
}

const dibujaCarro = () => {
    tablaBody.innerHTML="";  
    Object.values(carrito).forEach((producto) =>{
        tablaBody.innerHTML+= `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>$${producto.precio}</td>
                        <td><button class="btn btn-danger" id="${producto.id}" data-id="${producto.id}">X</button></td>
                    </tr>    `;
        tabla.append(tablaBody);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        suma();
    });
}

const capturaBtnBorrar = (e) => {
    if (e.target.classList.contains('btn-danger')){
        localStorage.removeItem(carrito[e.target.dataset.id]);
        delete carrito[e.target.dataset.id];
        if(Object.keys(carrito).length === 0){
            localStorage.clear();
        }
        suma();
        simple('success','Eliminado','Producto eliminado')
        dibujaCarro();
    }
    e.stopPropagation();
}











