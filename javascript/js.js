window.addEventListener('load', ()=> {

class productos {
    constructor(id,nombre,precio,stock){
        this.id=parseInt(id);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.stock=parseInt(stock);
    }
}

const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const btnsubmit = document.getElementById('btnsubmit');
const formulario = document.getElementById('formulario');
const tablaBody = document.getElementById('tablaBody');
const prodArr = []; //Array de productos
let click=0;

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    validarInput();
});

//Formato de la tabla
tabla.className="table table-striped table-dark text-center";

const validacionMal = (input, mensaje) => {
    const divForm = input.parentElement;
    const texto = divForm.querySelector('p');
    texto.innerText = mensaje;
    texto.style.color= 'red';
    input.style.border ="3px solid red";
}

const validacionBien = (input,mensaje) => {
    const divForm = input.parentElement;
    const texto = divForm.querySelector('p');
    texto.innerText = mensaje;
    texto.style.color= 'green';
    input.style.border ="3px solid green";
    if (nombre.value && isNaN(nombre.value) && precio.value && stock.value){
        btnsubmit.onclick = () => {
            prodArr.push(new productos(click, nombre.value , precio.value , stock.value));
            click+=1;
            let fila = document.createElement("tr");
            fila.innerHTML = `<td> ${click} </td>
                              <td> ${nombre.value} </td>
                              <td> $${precio.value} </td>
                              <td> ${stock.value} </td>
                              <td><button class="btn btn-danger btnBorrar">Borrar</button></td>`
            tablaBody.append(fila);
        }
    } else {
        btnsubmit.onclick = () => {
            console.log("ingresa datos");
        }
    }
}

const validarInput = () => {
    const nombreValor = nombre.value.trim();
    const precioValor = precio.value.trim();
    const stockValor = stock.value.trim();

    if (!nombreValor || nombreValor === ''){
        validacionMal(nombre, 'Campo vacio');
    }else if (!isNaN(nombreValor)){
        validacionMal(nombre, 'ingresó un número');
    }else {
        validacionBien(nombre, 'Todo correcto');
    } 

    (!precioValor || precioValor === '') ? validacionMal(precio, 'Campo vacio') : validacionBien(precio, 'Todo correcto');
    (!stockValor || stockValor === '') ? validacionMal(stock, 'Campo vacio') : validacionBien(stock, 'Todo correcto');
}
})

