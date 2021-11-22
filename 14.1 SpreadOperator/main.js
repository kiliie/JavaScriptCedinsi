"use strict";
//Expandir valores
//Agregando elementos a un arreglo
let miArreglo = [2, 4, 5, 6, 7];

console.log(...miArreglo); // Me imprime en forma individual

//Operador de propagación ...
let miArregloNuevo = [...miArreglo, 8, 10, 11];

console.log(...miArregloNuevo);

for (let i = 0; i < 5; i++) {
  miArreglo.push((Math.random() * (50 - 1) + 1).toFixed(0));
}
for (let i = 0; i < 6; i++) {
  miArregloNuevo = [
    ...miArregloNuevo,
    (Math.random() * (50 - 1) + 1).toFixed(0),
  ];
}

let arregloFinal = [...miArreglo, ...miArregloNuevo];

console.log(arregloFinal);

//Con una función
let lenguajes = ["JS", "Java", "TS", "C++", "C#"];

function imprimirLenguajes(lengua1, lengua2) {
  console.log(`*** LOS LENGUAJES TOP ***
                1. ${lengua1}
                2. ${lengua2}`);
}
//imprimirLenguajes(lenguajes);
imprimirLenguajes(...lenguajes);

//Rest

function imprimirLenguajesRest(lengua1, lengua2, ...resto) {
  console.log(`*** LOS LENGUAJES TOP ***
                1. ${lengua1}
                2. ${lengua2}
                3. ${resto}`);
}
imprimirLenguajesRest(...lenguajes, "Cobol", "Kotlin");
