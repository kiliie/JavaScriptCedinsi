const listado = document.getElementById('listado');
//Elementos de la listado
//const li = document.createElement('li');
//li.textContent = 'Cuaderno';
//listado.appendChild(li);
//Pero supongamos que tenemos un array 
const arrayUtiles = ['Cuaderno', 'Lápiz', 'Borrador', 'TajaLápiz'];
arrayUtiles.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listado.appendChild(li);
});
