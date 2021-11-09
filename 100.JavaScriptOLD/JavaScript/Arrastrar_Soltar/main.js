"use strict"
let container_01 = document.getElementById("container_01");
let container_02 = document.getElementById("container_02");
let productos = document.getElementsByClassName("productos");
console.log(productos);
/**
 * Eventos para arrastrar elementos
 * dragstart: se dispara al comenzar a arrastrar
 * drag: Se dispara mientras arrastramos
 * dragend: se dispara cuando soltados el objeto
 * 
 * Destino:
 * dragenter: se dispara cuando  el objetos entra en la zona destino
 * dragover:objeto se mueve sobre la zona destino
 * drop: se dispara cuando se suelta el objetos en el destino
 * dragleave: se dispara cuando sale de la zona destino
 */
console.log(productos.length);
for(let i=0; i<productos.length; i++){
    productos[i].setAttribute("draggale", "true");
    productos[i].setAttribute("id", "producto" + i);
    productos[i].addEventListener("dragstart", (ev) => iniciarArrastre(ev));
} 

container_02.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log("Drag Over");
});
container_02.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const data = document.getElementById(ev.dataTransfer.getData("text"));// Información a obtener
    container_02.appendChild(container_01.removeChild(data));
});

function iniciarArrastre (ev){
    ev.dataTransfer.setData("text/plain",ev.target.id); // Información que se va a compartir
    console.log(ev.target.id);
}

