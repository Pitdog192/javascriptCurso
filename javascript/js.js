class productos {
    constructor(id,nombre,precio,stock){
        this.id=parseInt(id);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.stock=parseInt(stock);
    }
}
const prodArr = []; //Array de productos
const agrega = function(index){
    prodArr.push(new productos(index+1, prompt("agrega nombre"), parseFloat(prompt("agrega precio")), parseInt(prompt("Cantidad de stock disponible"))))
}

let cantProd= parseInt(prompt("Sos el vendedor, definí la antidad de productos para agregar a la venta"));

for (let index = 0; index < cantProd; index++) {
    agrega(index)
}

console.log(prodArr);

const tablaBody =  document.getElementById("tablaBody");

for(const productos of prodArr){
    let fila = document.createElement("tr");
    fila.innerHTML = `<td> ${productos.id} </td>
                      <td> ${productos.nombre} </td>
                      <td> $${productos.precio} </td>
                      <td> ${productos.stock} </td>
                      <td><button class="btn btn-primary">Agregar</button></td>`
    tablaBody.append(fila);                  
}

//Formato de la tabla
tabla.className="table table-striped table-dark text-center"
if (prodArr.length <= 2){
    tabla.className="table table-striped table-primary text-center"
} else {
    tabla.className="table table-striped table-dark text-center"
}
