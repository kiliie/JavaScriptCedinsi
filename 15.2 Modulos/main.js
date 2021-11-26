"use strict";
import { operacion } from "./calculo.js";
import { buscarElemento } from "./varios.js";
import { saludo } from "./varios.js";

console.log(operacion(2, 3));
let miArray = [3, 67, 3, 45, 6, 8, 9, 0];
let respuesta = buscarElemento(miArray);
console.log(respuesta);
console.log(saludo('Perry'));
