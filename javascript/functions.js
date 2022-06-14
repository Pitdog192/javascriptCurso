//Funcion para crear productos
const agregaProd = (id,nombre,precio,imagen) => productos.push(new Producto(id,nombre,precio,imagen));

//Para mostrar los productos
const mostrarProd = () => {
    for (let prod of productos){
        let divCard = document.createElement("div");
        divCard.className ="card bg-light text-center col-lg-5 col-md-5 col-sm-12 mx-auto my-1";
        divCard.innerHTML= `<img class="card-img-top imgCards" src="${prod.imagen}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${prod.nombre}</h5>
                                <p>Precio: <b>$${prod.precio}</b></p>
                                <button class="btn btn-primary" id="btn${prod.id}">Agregar al carrito</button>
                            </div>`
        divProd.appendChild(divCard);                    
    }
}

const suma =()=> {
    const precio = Object.values(carrito).reduce((acc,{precio})=> acc+precio,0);
    filaT.innerHTML= `<td>Total:</td><td class="text-red">$${precio}</td>`
    return precio;
}

//Lista los productos en el carrito 
const agregarCarrito = () =>{
    for (let prod of productos){
        document.getElementById(`btn${prod.id}`).onclick=()=> {
            carrito.push(new Carrito(prod.nombre,prod.precio)); 
            let fila = document.createElement("tr");
            fila.innerHTML= `<td>${prod.nombre}</td>
                            <td>$${prod.precio}</td>`
            tablaBody.append(fila);
            alert(`Producto agregado ${prod.nombre}`);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
            suma();
        }
    }
}



const filaT = document.createElement('tr');
tablaFoot.appendChild(filaT);





