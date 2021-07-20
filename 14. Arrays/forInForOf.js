'use strict'
//for in y for of son variaciones del ciclo for
const miArray = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g');
/*
for (let i in miArray){
    console.log(miArray[i]);
}*/

for (let i of miArray) {
    console.log(i);
}

