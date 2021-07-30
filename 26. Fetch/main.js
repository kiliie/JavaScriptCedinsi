const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
    .finally(console.info('Ha finalizado la petición'))