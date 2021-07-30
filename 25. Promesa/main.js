'use strict'
const promesa = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.onload = function () {
        if (request.status == 200) {    //200 ok 500 400        
            resolve(JSON.parse(request.response));           
        } else {
            reject();
        }
    };    
    request.send();
});
    
promesa
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log(error,reject);       
    })
    .finally(console.log('Se ha finalizado'))