// Segundo paso
//cuando se cargue el script se obtiene el fondo guardado
const fondo = localStorage.getItem('fondo');
//Se asigna al background del body
document.body.style.background = fondo;

//Se configuran los botones para guardar un color en el localStorage
const btnAzul = document.getElementById('azul')
btnAzul.addEventListener('click', () => {

    //color azul
    localStorage.setItem('fondo', 'blue')

})

const btnRojo = document.getElementById('rojo')
btnRojo.addEventListener('click', () => {

    //color rojo
    localStorage.setItem('fondo', 'red')

})

const btnBorrar = document.getElementById('borrar')
btnBorrar.addEventListener('click', () => {

    //se quita el color
    localStorage.removeItem('fondo')

})