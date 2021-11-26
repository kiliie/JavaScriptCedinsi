//nullish se utiliza cuando deseamos
//comparar un valor null y usar el ternario

let numero1 = null;

numero1 = numero1 === null ? 0 : numero1;
console.log(numero1);

//Con nullish abreviamos esto

numero1 = numero1 ?? 1;
console.log(numero1);

const mostrarUsuario = (id, user) => {
  id = id ?? 0;
  user = user ?? "NOExist";
  return `${id} ${user}`;
};

console.log(mostrarUsuario(3, "Robert"));

// Si lo colocamos más óptimo

const mostrar = (id = 0, user = "No Hay") => `${id} ${user}`;
console.log(mostrar());
