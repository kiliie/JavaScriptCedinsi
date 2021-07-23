'use strict'
let textoCaja = document.querySelector("#caja");
let textoCaja2 = document.querySelector("#caja2");

function capturaKeyBoard(event) {
    let evento = event || window.event;
    textoCaja.innerHTML += "El evento es: " + evento.type +
        "El código de la tecla:" + evento.keyCode + "<br>"
    caracter(evento);
    console.log(evento);
}
function caracter(e) {
    textoCaja2.innerHTML += String.fromCharCode(e.charCode);
}
//https://elcodigoascii.com.ar/