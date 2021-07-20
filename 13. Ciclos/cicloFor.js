'use strict'
let acumulador = 0;
for (let i = 1; i <= 5; i++) {
    acumulador = acumulador + i;
    //acumulador += i;
    //console.log("Vuelta No:"+i);
}
console.log("Suma:"+acumulador);