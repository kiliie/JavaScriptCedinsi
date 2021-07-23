'use strict'
const parrafo = document.getElementById("regex").textContent;
//patrón
const regEx = /^([a-zA-Z]{4,25})$/;
const regEx1 = new RegExp('^([a-zA-Z]{4,25})$', 'g');
//Boolean
console.log(regEx.test(parrafo));
    




