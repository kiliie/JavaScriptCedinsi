'use strict'
//Condicional anidado
let numero = 201;

if (numero % 2 === 0) {
    if (numero <= 100){       
        console.log("El número:" + numero + " es par y es menor o igual a 100");
    }
} else {
    if ((numero > 100) && (numero < 200)) {
        console.log("El número:" + numero + " es impar y es mayor que 100 y menor 200");
    } else {
        console.log("El número es impar: "+numero+" mayor o igual que 200");
    }
}
