//1. Se obtiene el botón y el link
const btn_ubicarme = document.getElementById('ubicarme');
const mapaLink = document.getElementById('mapa-link');

//2. se escucha cuando se haga click en el botón
btn_ubicarme.addEventListener('click', () => {

    //3. se accede a la API de geolocalización 
    navigator.geolocation.getCurrentPosition((posicion) => {

        //el metodo getCurrentPosition devuelve la posición

        //4. se asigna la latitud y la longitud en dos nuevas constantes
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;

        //5. Se muestra la latitud y longitud en el HTML
        mapaLink.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;

        //6. se asigna a mapa Link la url de un servicio de mapas externos con las coordenadas
        mapaLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;

        //7 si hay algún error se imprime en consola
    }, (error) => {
        console.log(error);
    });
})


// navigator.geolocation.getCurrentPosition(position => {
//     position.coords.latitude // latitud
//     position.coords.longitude // longitud
// })