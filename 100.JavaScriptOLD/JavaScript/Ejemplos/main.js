
let listaEstudiantes = ['Andres', 'Leila', 'Juan','Ana', 'Maria', 'Luis', 'Carlos', 'Dario', 'Helen'];

//const estudiante = listaEstudiantes.find(estu => estu == 'Maria');
//console.log(estudiante);

let notas = [
    { nombre: 'Andres', nota:3, materia:'Matematica', edad: 22},
    { nombre: 'Leila', nota:4, materia:'Matematica', edad: 25},
    { nombre: 'Juan', nota:2, materia:'Matematica', edad: 19},
    { nombre: 'Ana', nota:3.3, materia:'Matematica', edad: 20},
    { nombre: 'Maria', nota:5, materia:'Matematica', edad: 30},
    { nombre: 'Luis', nota: 5, materia: 'Matematica', edad: 31 },
    { nombre: 'Carlos', nota: 4.4, materia: 'Matematica', edad: 18 },
    { nombre: 'Dario', nota: 2.4, materia: 'Matematica', edad: 27 },
    { nombre: 'Helen', nota:1.9, materia:'Matematica', edad: 23}
]
//Todos los estudiantes menores a 25 años
const resultado = notas.filter(estudiante => estudiante.edad < 25);
console.log(resultado);

//BUsqueda
const estudiantes = notas.find(estudiante => estudiante.nombre == 'Maria');


const estudianteIndice = notas.findIndex(i => i.nota === 4);

//Filtrar datos
const estudiant = notas.filter(estudiante => estudiante.nota === 5);
//console.log(estudiant);

/*

for (let i = 0; i < listaEstudiantes.length; i++){
    console.log(estudiantes[i]);
}

for (let estudiante in listaEstudiantes) {
    console.log(listaEstudiantes[estudiante]);
}

listaEstudiantes.forEach(element => {
    console.log(element)
});*/