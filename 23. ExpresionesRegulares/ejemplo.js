'use strict'
const texto = document.getElementById('regex').textContent;
const regEx = /un/;
const regEx1 = new RegExp('un','gi');
console.log(regEx1.test(texto));

