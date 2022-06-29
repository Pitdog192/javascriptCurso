const alertasimple = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
      })
}

const confirmaBorra = () => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "Esto no se podrá revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          alertasimple('success','Borrado!','El carrito ha sido borrado.')
        carrito = {};
        localStorage.clear();
        tablaBody.innerHTML = ``;
        sumaPrecios();
        }
      })
}
