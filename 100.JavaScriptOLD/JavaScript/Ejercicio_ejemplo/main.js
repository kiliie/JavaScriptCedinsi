"use strict"
//Evento onClick
function notasPromedio() {
    cuerpoPromedio(); 
}
// Mediante propiedad

const calculoPropiedad = document.getElementById('btn3Promedio');
calculoPropiedad.onclick = function () {
    cuerpoPromedio(); 
}

// Método .addEventListener
const calculoPromedio = document.getElementById('btnPromedio');

calculoPromedio.addEventListener('click', function () {
    cuerpoPromedio();
});



// Método de cálculo
const cuerpoPromedio = () => {
    let cantidadNotas = prompt('Introduzca la cantidad de notas');
    if (!isNaN(parseInt(cantidadNotas))) {
        let nota = 0;
        let sumaNotas = 0;
        for (let i = 1; i <= cantidadNotas; i++) {
            nota = prompt('Nota # ' + i + ":");
            sumaNotas += (parseFloat(nota));
        }
        let promedio = sumaNotas / cantidadNotas;
        alert('El promedio de notas es:'+promedio);
    } else {
        alert('Valor inválido');
    }    
}