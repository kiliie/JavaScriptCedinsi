const miEspera = (mensaje) => {
     return new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log(mensaje));
    }, 3000);
  });
}
const usoEspera = async (var1)=>{
    const primeraEspera = await miEspera(var1);
    console.log('Primer llamado');
}
usoEspera('Hola');