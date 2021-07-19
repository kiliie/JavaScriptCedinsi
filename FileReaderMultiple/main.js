let archivo = document.getElementById('archivo');
const fragment = new DocumentFragment();
let images = document.getElementById('images');
archivo.addEventListener('change', (event) => {   
    if (event.target.files) {
        const files = event.target.files;
        for(let file of files){
            const reader = new FileReader();
            const imagen = document.createElement('img');
            reader.readAsDataURL(file);
            reader.addEventListener('load', (e) => {
                const resultado = e.target.result;
                imagen.setAttribute('src', resultado);
                imagen.classList.add('imagen');
            })
            fragment.appendChild(imagen);
            
        }
        images.appendChild(fragment);
    }
})