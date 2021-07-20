'use strict'
let numero1 = 4;
let numero2 = 5;
const multiplicacion = new Function("num1","num2", "return num1*num2");
let multi = multiplicacion(numero1, numero2);
console.log(multi);