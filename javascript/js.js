class productos {
    constructor(id,nombre,precio,stock){
        this.id=parseInt(id);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.stock=parseInt(stock);
    }
}

const tablaBody =  document.getElementById("tablaBody");
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const btnsubmit = document.getElementById('btnsubmit');
const formulario = document.getElementById('formulario');
const leyenda1 = document.getElementById('leyenda1');
const leyenda2 = document.getElementById('leyenda2');
const leyenda3 = document.getElementById('leyenda3');
let vali1 = document.createElement("small");
let vali2 = document.createElement("small");
let vali3 = document.createElement("small");
const prodArr = []; //Array de productos
let click=0;

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    if(!isNaN(nombre.value) || nombre.value == ""){
        vali1.className = "form-text text-danger";
        vali1.innerHTML = `Tiene que ingresar un nombre valido`;
        nombre.style.border ="3px solid red";
        leyenda1.append(vali1);
        return;
    } 
    if(precio.value == ""){
        vali2.className = "form-text text-danger";
        vali2.innerHTML = `Tiene que ingresar un precio`;
        precio.style.border ="3px solid red";
        leyenda2.append(vali2);
        return;
    } 
    if(stock.value == ""){
        vali3.className = "form-text text-danger";
        vali3.innerHTML = `Tiene que ingresar stock`;
        stock.style.border ="3px solid red";
        leyenda3.append(vali3);
        return;
    } 
    btnsubmit.onclick = () => {
        prodArr.push(new productos(click+1, nombre.value , precio.value , stock.value));
        click+=1;
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${click} </td>
                          <td> ${nombre.value} </td>
                          <td> $${precio.value} </td>
                          <td> ${stock.value} </td>
                          <td><button class="btn btn-primary">Agregar al carrito</button></td>`
        tablaBody.append(fila);
        nombre.style.border ="3px solid white";                  
        precio.style.border ="3px solid white";
        stock.style.border ="3px solid white";
        if(leyenda1.append(vali1)){
            leyenda1.removeChild(vali1);
        } else if (leyenda2.append(vali2)){
            leyenda2.removeChild(vali2);
        } else if (leyenda3.append(vali3)){
            leyenda3.removeChild(vali3);
        }
    }
});

btnsubmit.onmouseover = () => {btnsubmit.className = "btn btn-success";}
btnsubmit.onmouseout = () => {btnsubmit.className = "btn btn-primary";}



//Formato de la tabla
tabla.className="table table-striped table-dark text-center";
