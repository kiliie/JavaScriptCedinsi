'use stric'
const promesa = new Promise((resolve, reject) => {
    resolve('Fue cumplida');
    reject('Rechazada');
});
promesa
    .then(response => {
        console.log(response);
    })
    .finally(console.log ('Se ha finalizado'))
    .catch (error => {
        console.log(error);
    })
