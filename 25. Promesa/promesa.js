'use stric'
const promesa = new Promise((resolve, reject) => {
    resolve('Fue cumplida');
    reject('Fue rechazada');
});

promesa
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error,reject);       
    })
    .finally(console.log('Se ha finalizado'))
