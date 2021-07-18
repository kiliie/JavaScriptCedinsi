'use strict'
const form = document.getElementById('form');
const button = document.getElementById('btnDatos');

const nombres = document.getElementById('inputNames');
const edad = document.getElementById('inputAge');

const correo = document.getElementById('inputEmail');
const ciudad = document.getElementById('inputCity');

const politica = document.getElementById('checkPolitica');

const formValid = {
    nombres: false,
    edad: false,
    correo: false,
    ciudad: false,    
    politica: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario() === -1) {
         alert("Enviando Formulario");
    } else {       
        alert("Error en valores de formulario");
    }
        
});

const validarFormulario = () => {
    const formsValues = Object.values(formValid);
    //console.log(formsValues);
    let valores = formsValues.findIndex(v => v === false);
    console.log(valores);
    return valores;
}

nombres.addEventListener('change', (e) => {
    const nombresRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    formValid.nombres = e.target.value.match(nombresRegex) ? true : false;   
    console.log(Object.values(formValid));
});


edad.addEventListener('change', (e) => {
    const edadRegex = /(^[0-9]{1,2}$)/g   
    if ((edad.value.match(edadRegex)) && (parseInt(edad.value)) >= 18) {
        formValid.edad = true;
    } else {
        formValid.edad = false;
    }
    console.log(Object.values(formValid));
});

politica.addEventListener('change', (e) => {
    formValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(formValid));
});

correo.addEventListener('change', (e) => {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    formValid.correo = e.target.value.match(correoRegex) ? true : false;
    console.log(Object.values(formValid));


});
ciudad.addEventListener('change', (e) => {
    console.log(e.target.selectedIndex);
    if (e.target.selectedIndex > 0) {
        formValid.ciudad = true;        
    } else {
        formValid.ciudad = false;
    }
    console.log(Object.values(formValid));
});



