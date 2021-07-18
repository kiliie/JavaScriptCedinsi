'use strict'
const miParrafo = document.createElement("p");
miParrafo.textContent = "Hola Cedinsi Fui creado desde Código";
//Atributos
miParrafo.id = "miParrafo";
miParrafo.className = "parrafo";
miParrafo.style = "colo:white";
//Insertar el elemento en el Dom
document.body.appendChild(miParrafo);
//Copia
//const p2 = miParrafo;
const p2 = document.createElement("p");
p2.textContent = "Con document.createElement se crean elementos html";
//console.log(p2.textContent);
//console.log(miParrafo.textContent);
//Clonar
const p3 = miParrafo.cloneNode();
p3.textContent = "Fui clonado";
p3.style = "color:white";
console.log(miParrafo.textContent);
console.log(p3.textContent);


//Asignación de Contenido
const parrafo = document.querySelector("#parrafo");
//const parrafo2 = document.getElementById("parrafo");
parrafo.textContent = " <h1>Hola</h1>";
//InnerHtml interpreta las etiquetas html mientras que textContent NO
parrafo.innerHTML = "<h3>Hola</h3>";
//Insertemos los elementos creados
parrafo.appendChild(p3);
document.body.appendChild(p3);
