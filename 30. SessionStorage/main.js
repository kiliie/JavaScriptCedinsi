//se obtiene el boton de registrar
const btnRegistrar = document.getElementById('btnRegistrar');
//se escucha el evento onClick
btnRegistrar.addEventListener('click', () => {

    //se obtiene el input
    const entrada = document.getElementById('entrada')

    //se obtiene el valor del input
    const nombre = entrada.value;

    //se guarda el valor del input en el sessionStorage
    sessionStorage.setItem('nombre', nombre)
});


//se obtiene el boton de imprimir
const btnImprimir = document.getElementById('btnImprimir');
//se escucha el evento onClick
btnImprimir.addEventListener('click', () => {

    //se obtiene el valor de nombre de el sessionStorage
    const nombre = sessionStorage.getItem('nombre')

    //se obtiene el párrafo donde se imprimirá el nombre
    const parrafo = document.getElementById('parrafo')

    //se asigna al texto del parrafo el nombre
    parrafo.innerText = nombre
});

//se obtiene el boton de eliminar
const btnEliminar = document.getElementById('btnEliminar');
//se escucha el evento onClick
btnEliminar.addEventListener('click', () => {

    //se borrá el valor del input de el sessionStorage
    sessionStorage.removeItem('nombre')
        //para limpiar todas las variables guardadas
    sessionStorage.clear()
});