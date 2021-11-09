//Ciclo for - Para
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

//While  -- Mientras
let j = 1;
while (j <= 10) {    
    console.log(j);
    j++;
}

//Do --- while ----Repetir hasta

let k = 0;

do{
    console.log(k);
    k++;

} while (k < 10);

let numero = 40;

if (numero % 2 == 0) {
    console.log('Es par');
} else {
    console.log('Es impar');
}*/

// Realizar un algoritmo que determina si un número es primo o no. 7%1 = 0, 7%2= 1.... 7%2=0

let numero = 13;
let numero2 = 13;

//primo(numero);
//Inicio de función
function primo(num) {
    let contadorResto = 0;
    for (let i =1;i<=num;i++) {
        if (num % i == 0) {
            contadorResto++;
        }
    }
    return contadorResto;
}//fin funcion

const RESULTADO = primo(numero2);
console.log('Valor devuelto por la función:'+RESULTADO);
if (RESULTADO == 2) {
    console.log('es primo');
} else {
    console.log('No es primo');
}








