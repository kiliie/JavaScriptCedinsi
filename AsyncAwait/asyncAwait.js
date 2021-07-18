'use strict'
async function SaludoMundo() {
    let miPromesa =  new Promise( (resolve)  => {
        setTimeout( () =>  resolve(console.log("Hola Mundo")), 2000)
    });
    await miPromesa;
    await Saludo();
    
}
function Saludo() {
    console.log('Hola Estudiante');
}

SaludoMundo();



