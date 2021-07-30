'use strict'
const listado = document.getElementById('listUtiles');
const arrayUtiles = ['Cuaderno', 'Libro', 'Lápiz', 'Borrador', 'Cartulina'];
arrayUtiles.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    listado.appendChild(li);
});