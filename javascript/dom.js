const divProd = document.getElementById('divProd');
const tabla = document.getElementById('tabla');
const tablaBody = document.getElementById('tablaBody');
const tablaFoot = document.getElementById('tablaFoot');
const filaT = document.createElement('tr');
const totalCarro = document.getElementById('totalCarro');
const btnMD = document.getElementById('btnMD');
tablaFoot.appendChild(filaT);
const templateCard = document.getElementById('templateCard').content;
const fragment = document.createDocumentFragment();


const botonDePrueba = document.getElementById('botondeprueba');

botonDePrueba.addEventListener('click', () =>{
    Swal.fire('Any fool can use a computer')
})