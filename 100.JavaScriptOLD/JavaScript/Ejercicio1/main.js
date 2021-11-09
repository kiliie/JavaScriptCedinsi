function suma(){
    let suma = 0;
    let numero = 0;
    let cantNumeros = prompt('Introduzca la cantidad de números entre 2 y 15');
    if (!isNaN(parseInt(cantNumeros))) {
        if ((cantNumeros >= 2) && (cantNumeros <= 15)){
            for(let i=1; i<=cantNumeros; i++){
                numero = prompt('Introduzca el número #'+i);
                suma+=parseInt(numero);                
            }
        }else{
            alert('Mínimo son 2 números y máximo 15');
        }       
    }else{
        alert('Número inválido');
    }
    alert('La suma es:'+suma);
}