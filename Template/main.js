'use strict'
const listado = document.getElementById('listPoke');
const fragment = new DocumentFragment();
const tem = document.getElementById('template').content;


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
const comprobacion = ('content' in document.createElement('template'));
//console.log(comprobacion);
if (comprobacion) {
    data.forEach(element => {
        tem.querySelector('i').textContent = element;
        const miElemento = tem.cloneNode(true);
        fragment.appendChild(miElemento);
    
    });
} else {
    data.forEach(element => {
    const li = document.createElement('li');
    //li.className = "list-group-item";
    li.classList.add('list-group-item');
    li.textContent = element;
    fragment.appendChild(li); //agregar o insertar un nuevo nodo hijo
    
});
}
listado.appendChild(fragment);


