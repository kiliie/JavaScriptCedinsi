'use strict'
//Variables Tipo de datos primitivos
/*let soyPrimitivo = 5;
let variable1 = soyPrimitivo;
console.log(variable1);
soyPrimitivo = 100;
console.log(variable1);*/
//Objetos
let fruta = {
    nombre : 'manzana'
}
let miFruta = fruta;
fruta.nombre = 'Banana';
console.log(miFruta.nombre);
//Comparemos los objetos
let resultado = (fruta === miFruta);
//console.log(resultado);
