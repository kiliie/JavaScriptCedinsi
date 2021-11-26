/* Objeto Sets: es una estructura donde se almacenan valores únicos
    del tipo que desee, no se pueden colocar valores duplicados
*/
"use strict";

let books = new Set(["El principito", "it", "100 años de soledad", "Drácula"]);
//console.log(books);

//Iterar el set

for (let i of books) {
  //console.log(i);
}

// No se puede utilizar length para el tamaño sino size

//console.log(books.size);

// Agregar elementos

books.add(3);
books.add(3);
books.add(3);
books.add(3);
//console.log(books.entries());

books.forEach((element) => {
  console.log(element);
});

//Borarr elemento
books.delete(3);
console.log(books);
//Si existe un elemento
console.log(books.has(3));
