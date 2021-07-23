'use strict'
let cadenaJson = { "nombre": "Angelica" };
let boolJson = { "soltero": true }
let numJson = { "edad": 24 }
let datos = [
  {
    "nombre": "Maria",
    "apellido": "Jaimes",
    "edad": 46,
    "materias": ["lógica", "programación", "álgebra"],
    "soltero":true
  },
  {
    "nombre": "Mario",
    "apellido": "Duarte",
    "edad": 40,
    "materias": ["lógica", "programación", "álgebra"],
    "soltero":true
  }
]

//Cambio de Objeto a Cadena
const MiDataCadena = JSON.stringify(datos);
console.log(typeof (MiDataCadena));
const miDataObj = JSON.parse(MiDataCadena);
console.log(typeof (miDataObj));