const fetch = require("node-fetch");
/*fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => console.log(json))
  .finally(console.log('Se ha finalizado'))
  .catch(error => console.error(error+" ......."))*/
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
const miPeticion = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.   
    credentials: 'API-KEY : xxxxxxuhjshhsh89898', // Si el servicio te pide alguna autentificación
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body debe ser del tipo de data según el header "Content-Type"
}; 
}fetch('url', miPeticion)
  .then(response => response.json())
  .then(respuesta => console.log(contenido))
  .catch(error => {
  console.error('Ha ocurrido un error', error);
});