
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/2')
.then(response => {    
    console.log(response.data);
})
.catch(error => {
    console.log(error);
})