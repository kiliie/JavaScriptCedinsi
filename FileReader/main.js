let archivo = document.getElementById('archivo');

//Para saber si se ha cargado el archivo, se utiliza el evento chage

archivo.addEventListener('change', (event) => {
    // 1. se verifica si existen archivos       
    if (event.target.files && event.target.files[0]) {
        // 2. se selecciona el elemento img por su id
        const imagen = document.getElementById('imagen');

        // 3. se crea un nuevo file reader
        const reader = new FileReader();

        //4. se lee el archivo como URL
        reader.readAsDataURL(event.target.files[0]);
        //5. se identifica cuando carga
        reader.onload = ((image) => {            
            //6. Con la propiedad result obtenemos el fichero como url
            const imagenUrl = image.target.result;
            //7. se asigna la url a el atributo src del elemento img 
            imagen.setAttribute('src', imagenUrl);
        });
    }
})