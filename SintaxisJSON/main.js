'use strict'
let cadenaJson = { "nombre": "Marco Antonio" };
let boolJson = { "soltero": true }
let numJson = {"edad" : 24}
let datos = [{
  "nombre" : "Maria",
  "apellido" : "Jaimes",
  "edad" : 46,
  "materias": ["lógica", "programación", "álgebra"],
  "soltero": true 
},
{
  "nombre" : "Laura",
  "apellido" : "Herrera",
  "edad" : 42,
  "materias": ["lógica", "programación", "álgebra"],
  "soltero": false 
}]

//Cambia de Objeto a Cadena 
const miDataCadena = JSON.stringify(datos);
const miDataObj = JSON.parse(miDataCadena);
console.log(typeof (miDataCadena));
console.log(typeof (miDataObj));
