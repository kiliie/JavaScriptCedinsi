/**
 * Los maps es una estructura parecida a los Sets, sin embargo
 * los elementos se guardan en formato de clave: valor
 * la clave o también llamada key puede ser cualquier cosa
 * un string, un numero
 */

const books = new Map();

books.set(1, "it");
books.set(2, "Alicia en el País de ...");
books.set(2, "EL principito");
books.set(2, "Juego de tronos");

//console.log(books);

books.set(1, "it");
books.set(2, "Alicia en el País de ...");
books.set(3, "EL principito");
//Encadenamiento
books
  .set("Cuatro", "Juego de tronos")
  .set("Cinco", "La vida es bella")
  .set("Seis", "El quijote");

console.log(books);

console.log(books.get("Cuatro"));
