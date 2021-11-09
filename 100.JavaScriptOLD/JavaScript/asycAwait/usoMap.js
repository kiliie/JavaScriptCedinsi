let array = new Array();
function generarArray() {
    for (let index = 0; index < 10; index++) {
        let valor = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        array.push(valor);
    }
}
generarArray();
const nuevoArray = array.map((arr) => Math.pow(arr,2));
console.log(nuevoArray);


