'use strict'
//1. Objeto
let curso = {
    nombre: "",
    duracion: 23,
    nivel: "medio",
    capacidad:45
}
//Objeto constructor
function persona(nom, ape, edad, peso) {
    this.nombre = nom;
    this.apellido = ape;
    this.edad = edad;
    this.peso = peso;
    
}

//Instanciar o creación del objet

let miPersona = new persona('Juan', 'López', 25, 65);
console.log(miPersona);

//Objeto Json es un objeto literal que puedo definir y almacenar datos
