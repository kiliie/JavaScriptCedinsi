let mesa = {
  nombre: "vivaldi",
  modelo: "mod01",
  altura: 30,
  ancho: 20,
};

console.log(mesa.nombre);

//Destructuracion, no importa orden

let { nombre, altura, modelo, ancho } = mesa;

console.log(altura);

//Destructurar un string

const data = "Jorge Parrado Estudiante IngSoftware 4";
const miArray = data.split(" ");
let [nombr, apellido, rol, carrera, promedio] = data.split(" ");
console.log(nombr);

//Creando variables

let var1 = "Hola1",
  var2 = "Hola2",
  var3 = "Hola3";

console.log(var1);

//Funcion esto se confunde con los parámetros
function mostrarDatos(nom, ape = "Desconocido", carr = "Ing") {
  console.log(`nombre: ${nom} apellido ${ape} Carrera:${carr}`);
}
//mostrarDatos("Juan", "Industrial");
//Mejoramos la función

const mostrarMejorado = ({
  nom = "Desconocido",
  ape = "Desconocido",
  carr = "Ing",
}) => console.log(`nombre: ${nom} apellido ${ape} Carrera:${carr}`);

mostrarMejorado({ nom: "Carlos", ape: "Duarte", carr: "Admin" });
