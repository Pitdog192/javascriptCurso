//Funcion para crear productos
const agregaProd = (id, nombre, precio, imagen) => productos.push(new Producto(id, nombre, precio, imagen));

//Para mostrar los productos
const mostrarProd = (contenido) => {
    contenido.forEach(producto => {
        templateCard.querySelector('img').setAttribute("src",producto.imagen);
        templateCard.querySelector('h5').textContent = producto.nombre;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('.btn').dataset.id = producto.id;
        let clon = templateCard.cloneNode(true);
        divProd.appendChild(clon);
    });
}


//Suma el total de todos los productos en el carrito
const suma = () => {
    const precio = Object.values(carrito).reduce((acc, { precio }) => acc + precio, 0);
    totalCarro.innerText = `$${precio}`
    return precio;
}



const capturaEvento = (e) => {
    if (e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = (producto) => {
    id = parseInt(producto.querySelector('.btn').dataset.id);
    nombre = producto.querySelector('h5').textContent ;
    precio = parseFloat(producto.querySelector('p').textContent);
    carrito.push(new Carrito(id,nombre,precio));
    let fila = document.createElement("tr");
    fila.innerHTML= `<td>${nombre}</td>
                    <td>$${precio}</td>
                    <td><button class="btn btn-danger" id="btnSD">X</button></td>`
    tablaBody.append(fila);
    alert(`Producto agregado ${nombre}`);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    suma();
}






