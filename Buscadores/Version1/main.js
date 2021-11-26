'use strict'
let table = document.getElementById('lista');//Seleccionando la tabla
let tableBody = table.querySelector('tbody');//Cuerpo de la tabla
let search = document.getElementById('buscar'); // Seleccionando el input buscar
let miValue = ''; //Aquí se almacena el contenido del input buscar
let arrayRowOri = [...table.querySelectorAll('tr')];//Filas originales, colocandolas en un arreglo

//Se hace una copia de las filas
let originalRows = arrayRowOri.map(row => {
    const newtr = document.createElement('tr');
    newtr.innerHTML = row.innerHTML;  
  return newtr;
});
originalRows.shift();

//asociamos el evento input que se dispara cuando cambia el value del buscar
search.addEventListener('input', e => {    
    miValue = e.target.value.trim(); //en miValue colocarmos el valor del elemento que disparó el evento
    //console.log(miValue);//eSO LO PUEDES BORRAR ES PARA QUE VEAS POR CONSOLA EL RESULTADO
	const rows = originalRows  //sE FILTRA LA INFORMACIÓN
        .filter(row => {
          let  cells = [...row.querySelectorAll('td')];
            return (
        miValue === ''
        || cells.find(cell => {
          return cell.textContent.includes(miValue);
        })
      )
    })
        .map(row => row.outerHTML)
    
    tableBody.innerHTML = rows.join('');    
  if (miValue !== '') {
      tableBody.querySelectorAll('tr td').forEach(row => {
          const html = row.textContent.replace(miValue, `<b class="select">${miValue}</b>`)
          row.innerHTML = html;          
      });  

    }
   
});

