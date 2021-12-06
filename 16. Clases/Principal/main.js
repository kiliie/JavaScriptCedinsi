"use strict";
import { Estudiante } from "../Estudiante.js";
import { Persona } from "../Persona.js";
import { Profesor } from "../Profesor.js";

const miPersona = new Persona(
  "Maria del Socorro",
  "Jaimes Guerrero",
  "mari22@gmail.com",
  16
);

console.log(miPersona.getDatos());
console.log(miPersona.getClasificacion());
console.log(miPersona.getCantidadHijos());
//Acceder a método estático
console.log(Persona.algo());
//Protegido
console.log(miPersona._nacionalidad);
const miProfesor = new Profesor('Maria del Socorro', 'Jaimes Guerrero', 'mari22@gmail.com', 16, 22, 12);
console.log(miProfesor.getDatos());
console.log("El sueldo es:" + miProfesor.getCalculoSueldo());
const miEstudiante = new Estudiante(4);
console.log(miEstudiante._nacionalidad);
console.log(miEstudiante.promedio);

/*
//Crear un objeto 
let curso = {
    nombre: "JavaScript",
    duracion: 40,
    nivel: "Medio",
    capacidad: 25,
    inscripcion: function () {
        let cadena = `Nombre del curos:${this.nombre} que tiene una duración:${this.duracion}`;
        return cadena;
    }
}
//curso.nombre = "Java";

console.log(curso.inscripcion());
//Definir un objeto a traves de un constructor

function Curso(nom,dur,niv,cap) {
    this.nombre = nom;
    this.duracion = dur;
    this.nivel = niv;
    this.capacidad = cap;    
    this.inscripcion= function () {
        let cadena = `Nombre del curos:${this.nombre} que tiene una duración:${this.duracion}`;
        return cadena;
    }
    
}

let miCurso = new Curso('PHP', 20, "Avanzado", 20);

console.log(miCurso.inscripcion());*/
