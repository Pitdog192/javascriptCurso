//Agrega productos al array
agregaProd(1, "Alpha - Mascarilla Exfoliante y Purificante", 1800, "../imagenes/imgJava/cremaNegra.jpg");
agregaProd(2, "Brocha Facial", 300, "../imagenes/imgJava/brochaFacial.jpg");
agregaProd(3, "Toalla Facial Desmaquillante", 350, "../imagenes/imgJava/toallaFacial.jpg");
agregaProd(4, "Esmalte UNA", 670, "../imagenes/imgJava/esmalteBordo.jpg");
agregaProd(5, "Torno Profesional Nail Station 4 in One Teknikpro", 29900, "../imagenes/imgJava/tornoProfesional.jpg");
agregaProd(6, "Alicate Gusano Acero Inoxidable 915 ProStyle", 1910, "../imagenes/imgJava/AlicateGusano.jpg");

//Crear cards de productos 
mostrarProd(productos);


// Comprueba si existe algo en el carrito del localstorage
if (carrito) {
    suma();
    tablaBody.innerHTML="";  
    Object.values(carrito).forEach(producto => {
        tablaBody.innerHTML += `<tr><td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
            <td><button class="btn btn-danger" id="btn${producto.id}"  data-id="${producto.id}">X</button></td></tr>`
        tabla.append(tablaBody);
    })
} 
  
//Boton para borrar todo el carrito

btnMD.onclick = () => {
    if (Object.keys(carrito).length === 0){
        simple('error', 'No hay productos para eliminar', 'Compre algo antes!');
    } else {
        confirmaBorra();
    }
}

//Boton para agregar productos al carrito
divProd.addEventListener('click', e =>{
    capturaEvento(e)
})

tabla.addEventListener('click', e => {
    capturaBtnBorrar(e)
} )


const agregaProducto = (imagen, nombre, precio, id) => {
        templateCard.querySelector('img').setAttribute("src", imagen);
        templateCard.querySelector('h5').textContent = nombre;
        templateCard.querySelector('p').textContent = precio;
        templateCard.querySelector('.btn').setAttribute("id", `btn${id}`);
        templateCard.querySelector('.btn').dataset.id = id;
        let clon = templateCard.cloneNode(true);
        divProd.appendChild(clon);
}


btnForm.onclick = () => {
    Swal.fire({
  title: 'Cargar productos nuevos',
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
    if (!idProd || !nombre) {
      Swal.showValidationMessage(`Ingresá los datos del producto`)
    }
    return { id: idProd, nombre: nombre, precio: precio, imagen: imagen }
  }
}).then((result) => {
    agregaProd(result.value.id , result.value.nombre, result.value.precio ,result.value.imagen);
    agregaProducto(result.value.imagen, result.value.nombre, result.value.precio , result.value.id);
    console.log(productos);
})
}