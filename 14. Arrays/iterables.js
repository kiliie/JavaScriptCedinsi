//Los arreglos y las cadenas de caracteres son iterables
//AHora los objetos directamente no podemos iterarlos
//Los iterables son un protocolo que se puede aplicar a cualquier arreglo
//1. declaro el iterable
const miArreglo = [1, "6", 3.3, "mi Arreglo", false];
const miIterador = miArreglo[Symbol.iterator]();
//console.log(miIterador);
console.log(miIterador.next());

let datos = [
  {
    nombre: "Maria",
    apellido: "Jaimes",
    edad: 46,
    materias: ["lógica", "programación", "álgebra"],
    soltero: true,
  },
  {
    nombre: "Mario",
    apellido: "Duarte",
    edad: 40,
    materias: ["lógica", "programación", "álgebra"],
    soltero: true,
  },
];
let color = {
  nombre: "Rojo Fuerte",
  color: "Rojo",
  marca: "PrismaColor",
};

//No va a dejar iterar el JSON
for (let obje of color) {
  console.log(obje);
}

//Con iterador si se puede
color[Symbol.iterator] = function () { 
    
}