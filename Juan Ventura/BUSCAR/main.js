'use strict'
const listado = document.querySelector('tbody');
const fragment = new DocumentFragment();
const contendor = document.getElementById('autocomplete');
let search = document.getElementById('buscar'); // Seleccionando el input buscar

async function obtenerLista(){
     const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
         .then(response => {
             const resultados = response.data.results;
             let poke = [];
             for (const i in resultados) {
                 poke.push(resultados[i]);
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
search.addEventListener('input', (e) => {
    let miValue = e.target.value;
    listado.innerHTML = '';
    if (miValue.trim().length > 2) {
        const busqueda = data.filter((item) => {            
            let k = item.name.includes(miValue);
            k += item.url.includes(miValue);           
            return (k)
        });        
        let fr = '';        
        for (const i in busqueda) {            
            fr += `<tr id='${busqueda[i].name}'><td>${busqueda[i].name.replace(new RegExp(miValue), `<strong>${miValue}</strong>`)}</td>
                   <td>${ busqueda[i].url.replace(new RegExp(miValue), `<strong>${miValue}</strong>`)}</td>
                   <td>${ i }</td>
                   <td>${ busqueda[i].name.replace(new RegExp(miValue), `<strong class="select">${miValue}</strong>`)}</td></tr>`;            
        }
        listado.innerHTML = fr;
        if (busqueda.length > 0) {
            contendor.style.display = 'block';
        } else {
            contendor.style.display = 'none';            
        }
        listado.appendChild(fragment);
        busqueda.forEach(element => {
            seleccion(document.getElementById(element.name),element.name);
        })
    } else {
        listado.innerHTML = '';
        contendor.style.display = 'none';        
    }
});

function seleccion(li,nombre) {
    console.log(li);
    li.addEventListener('click', (e) => {
        console.log(e);
        const elem = e.target.textContent;
        console.log(elem);
        search.value = nombre;
        listado.innerHTML = '';
        contendor.style.display = 'none';  
        console.log(search.textContent);
    })
}






