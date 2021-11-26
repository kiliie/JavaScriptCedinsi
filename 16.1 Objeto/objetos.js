"use strict";
//1. Objeto
let curso = {
  nombre: "",
  duracion: 23,
  nivel: "medio",
  capacidad: 45,
};
//Objeto constructor
function persona(nom, ape, edad, peso) {
  this.nombre = nom;
  this.apellido = ape;
  this.edad = edad;
  this.peso = peso;
}

//Instanciar o creación del objet

let miPersona = new persona("Juan", "López", 25, 65);
//console.log(miPersona);

//
const nombreLibro = "it";
const genero = "Terror";
const editorial = "Fama";

const book = {
  nombreLibro,
  genero,
  editorial,
  //propiedad compuesta
  [genero]: " 1990",
  escribir: function () {
    return `El libro es: ${nombreLibro} su genero y año: ${genero} `;
  },
};

//console.log(book.Terror);
//Devuelve los valores del objeto en forma de array
console.log(Object.values(book));
//Devuelve el nombre de los atributos de objetos
console.log(Object.keys(book));
//Volver iterable el objeto
Object.entries(book).forEach((e) => console.log(e));
Object.entries(book).forEach(([key, value]) => console.log(key, value));
