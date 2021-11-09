const boton = document.getElementById('btnArreglo');

function generarArreglo() {
    let miArreglo = [];
    let miArreglo2 = new Array();
    let contadorNeg = 0;
    let contadorPos = 0;
    let contadorCeros = 0;
    for (let i = 0; i < 15; i++) {
        miArreglo[i] = ((Math.random() * (50 - (-30)) + (-30)).toFixed(0));
        miArreglo2.push((Math.random() * (50 - (-30)) + (-30)).toFixed(0));
        console.log("sdf " + miArreglo2);
        if (miArreglo[i] > 0) {
            contadorPos++;
        } else {
            if ((miArreglo[i] === 0)){
                contadorCeros++;
            } else {
                contadorNeg++;
            }
        
        }
    }
    console.log(miArreglo);
    console.log("Cantidad de Positivos: " + contadorPos);
    alert("Cantidad de Positivos:" + contadorPos);
    alert("Arreglo:"+miArreglo);

}
