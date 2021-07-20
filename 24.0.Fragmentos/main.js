'use strict'
const listado = document.getElementById('listPoke');
const fragment = new DocumentFragment();

//const fragment = document.createDocumentFragment();

async function obtenerLista(){
     const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
         .then(response => {
             const resultados = response.data.results;
             let poke = [];
             for (const i in resultados) {
                 poke.push(resultados[i].name);
             }
             return poke;
         })
         .catch(error => {
             console.log(error);
             return 0;
         });     
     return resp;
}
const data = await obtenerLista();
/*//Alternativa para el fragment con innerHTML
let miListado = "";
data.forEach(element => {
    miListado += `<li class="list-group-item">Poke: <i>${element}</i></li>`
});
listado.innerHTML = miListado;*/

data.forEach(element => {
    const li = document.createElement('li');
    //li.className = "list-group-item";
    li.classList.add('list-group-item');
    li.textContent = element;
    fragment.appendChild(li); //agregar o insertar un nuevo nodo hijo
    
});
listado.appendChild(fragment);


