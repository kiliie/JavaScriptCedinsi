'use strict'

function validar(){
  const miCorreo = document.querySelector('#correo').value;
  const miNombres = document.querySelector('#nombres').value;
  validarNombres(miNombres);
  validarCorreo(miCorreo);
}
const validarCorreo = (cadena) => {
  const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
  if (!cadena.match(correoRegex)) {
    alert('Correo Inválido');
  }   
}
const validarNombres = (cadena) => {
  const nombresRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
  if (!cadena.match(nombresRegex)) {
    alert('Nombre Inválido');
  }
}