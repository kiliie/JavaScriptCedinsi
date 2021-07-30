'use strict'
const listado = document.querySelector('tbody');
const fragment = new DocumentFragment();
const contenedor = document.getElementById('autocomplete');
let search = document.getElementById('buscar'); // Seleccionando el input buscar

async function obtenerLista() {   
     const resp = await axios.post("https://facturadeventa.com/api/v1/products")
         .then(response => {             
             const resultados = response.data;            
             let products = [];
             for (const i in resultados) {
                 products.push(resultados[i]);
             }             
             //console.log(products);
             return products;             
         })
         .catch(error => {
             console.log(error);
             return 0;
         });     
     return resp;
}
const data = await obtenerLista();
//console.log(data);//impresión por consola de la data
search.addEventListener('input', (e) => {
    let miValue = e.target.value.toUpperCase();
    listado.innerHTML = '';
    if (miValue.trim().length >= 2) {        
        const busqueda = data.filter((item) => {            
            let filterData = item.descripcion.includes(miValue);
            filterData += item.marca.includes(miValue);
            filterData += item.stock.includes(miValue);
            filterData += item.precio.includes(miValue);           
            return (filterData)
        });        
        let sFragment = '';        
        for (const i in busqueda) {            
            sFragment += `
            <tr id='${busqueda[i].descripcion}'>            
            <td>${busqueda[i].id.replace(new RegExp(miValue), `<strong class="select">${miValue}</strong>`)}</td>
            <td>${busqueda[i].descripcion.replace(new RegExp(miValue), `<strong>${miValue}</strong>`)}</td>
            <td>${ busqueda[i].marca.replace(new RegExp(miValue), `<strong>${miValue}</strong>`)}</td>
            <td>${ busqueda[i].precio.replace(new RegExp(miValue), `<strong >${miValue}</strong>`)}</td>
            <td>${ busqueda[i].stock.replace(new RegExp(miValue), `<strong>${miValue}</strong>`)}</td>            
            </tr>`;            
        }
        listado.innerHTML = sFragment;
        if (busqueda.length > 0) {
            contenedor.style.display = 'block';
        } else {
            conteDisplay();        
        }
        listado.appendChild(fragment);
        busqueda.forEach(element => {
            seleccion(document.getElementById(element.descripcion),element.descripcion);
        })
    } else {
        conteDisplay();
    }
});

const conteDisplay = () => {
    listado.innerHTML = '';
    contenedor.style.display = 'none';  
}

function seleccion(li,nombre) {    
    li.addEventListener('click', (e) => {
        const elem = e.target.textContent;
        search.value = nombre;
        conteDisplay();      
    });
}






