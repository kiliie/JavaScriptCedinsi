let cedinsi = " Cedinsi";

const saludo = function (msj) {
    console.log("Hola Mundo"+msj);
}

function saludar(callback,msj) {
    callback(msj);
}
saludar(saludo, cedinsi);



