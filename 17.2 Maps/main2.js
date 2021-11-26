const oldBooks = {
  4: "Dumbo",
  5: "El soldado",
  6: "El rey león",
};

const books = new Map(Object.entries(oldBooks));

books.set(1, "it");
books.set(2, "Alicia en el País de ...");
books.set(3, "EL principito");
//Encadenamiento
books
  .set("Cuatro", "Juego de tronos")
  .set("Cinco", "La vida es bella")
  .set("Seis", "El quijote");

console.log(books);


