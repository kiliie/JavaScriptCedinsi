'use strict'
//Agregando elementos a un arreglo
let miArreglo = [2, 4, 5, 6, 7];
//Operador de propagación ...
let miArregloNuevo = [...miArreglo,8,10,11];

for (let i = 0; i < 5; i++) {
    miArreglo.push((Math.random() * (50 -1)+1).toFixed(0));
}
for (let i = 0; i < 6; i++) {
    miArregloNuevo=[...miArregloNuevo,((Math.random() * (50 -1)+1).toFixed(0))];
}

let arregloFinal = [...miArreglo,...miArregloNuevo];

console.log(arregloFinal);
