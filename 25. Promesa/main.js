'use strict'

const promesa = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.onload = function () {
        if (request.status == 200) {            
            resolve(JSON.parse(request.response));
           
        } else {
            reject();
        }
    };
    
    request.send();

});
    