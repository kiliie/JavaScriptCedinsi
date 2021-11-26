"use strict";

function buscarElemento(datos) {
  let response = datos.filter((item) => item > 5);
  return response;
}

const saludo = (nombre) => `Hola ${nombre} bienvenido`;

export {
  buscarElemento,
  saludo
};
