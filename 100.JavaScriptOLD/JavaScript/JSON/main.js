'use strict'
let objeto = {
"nombre":"Maria",
"apellido":"Jaimes",
"edad":"46"
}
console.log(typeof (objeto));
const miCadena = JSON.stringify(objeto);
console.log(miCadena);
console.log(typeof (miCadena));
const miObjeto = JSON.parse(miCadena);
console.log(miObjeto);
console.log(typeof (miObjeto));