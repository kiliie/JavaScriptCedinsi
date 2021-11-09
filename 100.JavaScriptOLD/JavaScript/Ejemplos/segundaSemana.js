'use strict';
//Sumar 3 numeros pero que sean positivos
/**
 * DS: suma
 * DE: 3 numeros
 * Condición: positivos
 */

let numero1 = 5;
let numero2 = 3.3;
let numero3 = -34;
let suma = 0;

//Condiciones anidadas
if (numero1 > 0) {
    if (numero2 > 0) {
        if (numero3 > 0) {
             suma = numero1 + numero2 + numero3;
           // console.log(suma);
        } else {
            //console.log('Numero3 es negativo');
        }
    } else {
        //console.log('Numero2 es negativo');
    }
} else {
    //console.log('Numero1 es negativo');
}
//  ||&&

if ((numero1 > 0) && (numero2 > 0) && (numero3 > 0)) {
    suma = numero1 + numero2 + numero3;
    console.log(suma);
} else {
    console.log('Hay un valor negativo');
}


