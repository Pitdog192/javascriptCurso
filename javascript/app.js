//Agrega productos al array
agregaProd(1, "Alpha - Mascarilla Exfoliante y Purificante", 1800, "../imagenes/imgJava/cremaNegra.jpg");
agregaProd(2, "Brocha Facial", 300, "../imagenes/imgJava/brochaFacial.jpg");
agregaProd(3, "Toalla Facial Desmaquillante", 350, "../imagenes/imgJava/toallaFacial.jpg");
agregaProd(4, "Esmalte UNA", 670, "../imagenes/imgJava/esmalteBordo.jpg");
agregaProd(5, "Torno Profesional Nail Station 4 in One Teknikpro", 29900, "../imagenes/imgJava/tornoProfesional.jpg");
agregaProd(6, "Alicate Gusano Acero Inoxidable 915 ProStyle", 1910, "../imagenes/imgJava/AlicateGusano.jpg");

//Crear cards de productos 
mostrarProd(productos);


//Comprueba si existe algo en el carrito del localstorage
if (carrito) {
    suma();
    for (let carro of carrito) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${carro.nombre}</td>
            <td>$${carro.precio}</td>
            <td><button class="btn btn-danger" id="btnSD">X</button></td>`
        tablaBody.append(fila);
    }
}

//Boton para borrar todo el carrito
btnMD.onclick = () => {
    let respuesta = prompt("Si desea borrar todo escriba si");
    if ((respuesta === 'Si') || (respuesta ==='si') || (respuesta === '')){
        carrito.splice(0, carrito.length);
        localStorage.clear();
        tablaBody.innerHTML = ``;
        suma();
    }
}

//Boton para agregar productos al carrito
divProd.addEventListener('click', e =>{
    capturaEvento(e)
})
