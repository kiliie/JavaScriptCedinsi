function saludoUno(nombre) {
  const saludoDos = () => "Hola Bienvenido(a) " + nombre;
  return saludoDos;
}

console.log(saludoUno("Lorena")());
