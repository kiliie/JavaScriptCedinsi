'use strict'
const listado = document.getElementById('listPoke');
const fragment = new DocumentFragment();
async function obtenerLista() {
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
        })
    return resp;
}
const data = await obtenerLista();
data.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = element;
    fragment.appendChild(li);
});
listado.appendChild(fragment);


//óptima

//1era forma
/*
data.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = element;
    listado.appendChild(li);
});
//2da forma

let miListado = "";
data.forEach(element => {
    miListado += `<li class="list-group-item">Poke: <i>${element}</i></li>`;
});
listado.innerHTML = miListado;

*/
