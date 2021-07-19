'use strict'
const listado = document.getElementById('listPoke');
const fragment = new DocumentFragment();
console.log(fragment);
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
data.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    fragment.appendChild(li);
    console.log(element);
});
listado.appendChild(fragment);

