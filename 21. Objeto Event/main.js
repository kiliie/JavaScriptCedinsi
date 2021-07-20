let textoCaja = document.querySelector("#caja");
let textoCaja2 = document.querySelector("#caja2");

function capturaKB(event) {
    let evento = event || window.event;
    textoCaja.innerHTML += " El evento es: "+evento.type+" el código de tecla:"+evento.keyCode+"<br>" 
    caracter(evento);
    console.log(evento.target);
}
function caracter(e) {
    textoCaja2.innerHTML += String.fromCharCode(e.charCode);
    
}