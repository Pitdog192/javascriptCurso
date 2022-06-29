// Comprueba si existe algo en el carrito del localstorage y lo vuelve a pintar
if (carrito) {
    sumaPrecios();
    tablaBody.innerHTML="";  
    Object.values(carrito).forEach(producto => {
        tablaBody.innerHTML += `<tr><td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
            <td><button class="btn btn-danger elimProd" id="btn${producto.id}" data-id="${producto.id}">X</button></td></tr>`
        tabla.append(tablaBody);
    })
} 
  
//Boton para borrar todo el carrito
btnMD.onclick = () => {
    if (Object.keys(carrito).length === 0){
        alertasimple('error', 'No hay productos para eliminar', 'Compre algo antes!');
    } else {
        confirmaBorra();
    }
}

//Boton para agregar productos al carrito
divProd.addEventListener('click', e =>{
    capturaEvento(e)
})

//Borra productos del carro
tabla.addEventListener('click', e => {
    capturaBtnBorrar(e)
} )

//Agrega nuevos productos a la vista atravez de un evento de botón
btnForm.onclick = () => {
    Swal.fire({
  title: 'Cargar productos nuevos (Faltan las validaciones)',
  html: `<input type="text" id="idProd" class="swal2-input" placeholder="ID">
         <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
         <input type="text" id="precio" class="swal2-input" placeholder="Precio">
         <input type="text" id="imagen" class="swal2-input" placeholder="Ingrese link de la imagen" value="../imagenes/imgJava/testProd.jpg">`,
  confirmButtonText: 'Cargar Producto',
  focusConfirm: false,
  preConfirm: () => {
    const idProd = Swal.getPopup().querySelector('#idProd').value
    const nombre = Swal.getPopup().querySelector('#nombre').value 
    const precio = Swal.getPopup().querySelector('#precio').value
    const imagen = Swal.getPopup().querySelector('#imagen').value
    if (!idProd) {
      Swal.showValidationMessage(`Debe ingresar ID y debe ser un número`)
    } else if (!nombre) {
        Swal.showValidationMessage(`Debe ingresar un nombre para el producto`)
    } else if (!precio) {
        Swal.showValidationMessage(`Debe ingresar el precio y debe ser númerico`)
    }
    return { id: idProd, nombre: nombre, precio: precio, imagen: imagen }
  }
}).then((result) => {
    let prodNuevo = result.value;
    templateCard.querySelector('img').setAttribute("src",prodNuevo.imagen);
    templateCard.querySelector('h5').textContent = prodNuevo.nombre;
    templateCard.querySelector('p').textContent = prodNuevo.precio;
    templateCard.querySelector('.btn').setAttribute("id", `btn${prodNuevo.id}`);
    templateCard.querySelector('.btn').dataset.id = prodNuevo.id;
    let clon = templateCard.cloneNode(true);
    divProd.appendChild(clon);
})
}
