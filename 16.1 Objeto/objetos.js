'use strict'
function persona(nom, ape, edad, peso) {
    this.nombre = nom;
    this.apellido = ape;
    this.edad = edad;
    this.peso = peso;
    
}

//Instanciar o creación del objet

let miPersona = new persona('Juan', 'López', 25, 65);
console.log(miPersona);