'use strict'
//Vamos a utilizar la función prompt
let opcion = prompt('Ingrese una vocal');
switch (opcion){
    case 'a':
        alert('Es la letra a');
        break;
    case 'e':
        alert('Es la letra e');
        break;
    case 'i':
        alert('Es la letra i');
        break;
    case 'o':
        alert('Es la letra o');
        break;
    case 'u':
        alert('Es la letra u');
        break;
    default:
        alert('Opción no dentro del rango');
}