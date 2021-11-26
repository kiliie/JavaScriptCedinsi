"use strict";
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sábado_domingo";
let miArray = cadenaDias.split("_");
//console.log(miArray);

//1. Buscar, sino encuentra devuelve undefined

const busqueda = miArray.find((e) => e === "viernes");
//console.log(busqueda);

//2. Buscar indice sino lo consigue devuelve -1

const indice = miArray.findIndex((e) => e === "lunes");
//console.log(indice);

//3.Crear array en un objeto iterable
const arrayDias = Array.from(cadenaDias, (e) => e + "j");
//console.log(arrayDias);
const arrayNumeros = [3, 6, 7, 5, 8, 0, 1];
const arrayCuadrados = Array.from(arrayNumeros, (e) => e * e);
//console.log(arrayCuadrados);

//4. Incluedes
//Comprobar si existe un elemento dentro de un array devuelve true o false
//console.log(miArray.includes("viernes"));

//5. Filtrar elementos

const result = arrayNumeros.filter((e) => e > 3);
//console.log(result);

// 6. Some se utiliza para buscar

//console.log(miArray.some((dia) => dia === "martes"));

//7. Every comprueba un elemento común en un arreglo de objetos, devuelve true o false

const creditos = [
  {
    cliente: "0001",
    estatus: "APROBADO",
  },
  {
    cliente: "0002",
    estatus: "REPROBADO",
  },
  {
    cliente: "0003",
    estatus: "APROBADO",
  },
  {
    cliente: "0004",
    estatus: "APROBADO",
  },
];

//console.log(creditos.every((e) => e.estatus === "APROBADO"));

//8. Map recorrer un arreglo y devuelve un nuevo array

const nuevoArray = miArray.map((e) => e.charAt());
//console.log(nuevoArray);

//9. Reduce acumula valores o concatena 

console.log(
  miArray.reduce((acumulador, current) => {
    return acumulador + " " + current;
  })
);

console.log(
  arrayNumeros.reduce((acumulador, current) => {
    return acumulador + current;
  })
);
