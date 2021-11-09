/**
 * DS: cantidadImpares
 * DE: cantidadNumeros
 */

const calculoImpares = () => {
    const cantidadNumeros = prompt('Introduzca la cantidad de números');
    let numeros = 0;
    let contadorImpares = 0;
    if (!isNaN(parseInt(cantidadNumeros))) {
        for (let i = 0; i < cantidadNumeros; i++) {
            numeros = prompt('Introduzca el número:'+(i+1));
            numeros = Number(parseFloat(numeros));
            if (numeros % 2 != 0) {
                contadorImpares++;
                console.log('Impar');
            }
        }
        alert('Cantidad de impares:'+contadorImpares);
    } else {
        alert('Dato inválido');
    }
}