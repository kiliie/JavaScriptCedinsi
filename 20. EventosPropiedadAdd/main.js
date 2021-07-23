"use strict"
//Evento onClick
function notasPromedio() {
    cuerpoPromedio();
}
//Mediante Propiedades
const btnPropiedad = document.getElementById('btn3Promedio');
btnPropiedad.onclick = function () {
    cuerpoPromedio();
}
//Método .addEventListener
const btnAddEvenLis = document.getElementById('btnPromedio');

btnAddEvenLis.addEventListener('click', function () {
    cuerpoPromedio();
});

//Método de cálculo del Promedio
const cuerpoPromedio = () => {
    let cantidadNotas = prompt("Introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantidadNotas))) {
        let nota = 0;
        let sumaNotas = 0;
        for (let i = 1; i <= cantidadNotas; i++) {
            //Las sumaNotas
            nota = prompt("Instroduzca la Nota No:" + i);
            sumaNotas += (parseFloat(nota));
        }
        let promedio = sumaNotas / cantidadNotas;
        alert('El promedio de notas es:' + promedio.toFixed(1));
    } else {
        alert('Valor es inválido');
    }
}