//1. Se obtiene el botón y el link
const btn_ubicarme = document.getElementById('ubicarme');
//2. se escucha cuando se haga click en el botón
btn_ubicarme.addEventListener('click', () => {
    const disponible = ("geolocation" in navigator);
    if (disponible) {
        miUbicacion();
    } else {
        const fuera = document.getElementById('fuera');
        fuera.innerHTML = "<strong>El Navegador no soporta la Geolocalización</strong>";
        return;
    }    
});

function miUbicacion() {
    const mapaLink = document.getElementById('mapa-link');
    const datos = document.getElementById('otros')
    //3. se accede a la API de geolocalización 
    navigator.geolocation.getCurrentPosition((position) => { 
        //el metodo getCurrentPosition devuelve la posición

        //4. se asigna la latitud y la longitud en dos nuevas constantes
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const presicion = position.coords.accuracy;
        const altitud = position.coords.altitude;
        datos.innerHTML = `<p>Altitud: ${altitud} La presición es: ${presicion }metros</p>`;
        //5. Se muestra la latitud y longitud en el HTML
        mapaLink.innerHTML = `Latitud: ${latitud} °, Longitud: ${longitud} °`;       
        //6. se asigna a mapa Link la url de un servicio de mapas externos con las coordenadas
        mapaLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;

        //7 si hay algún error se imprime en consola
    }, (error) => {
        console.log(error);
    });
}
