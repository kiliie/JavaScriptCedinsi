"uses strict"
 
let contenedor = document.getElementById('contenedor');
let heroes;
datos = () => {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(data => data.json())
        .then(data => {
            heroes = data;
            mostrarHeroes(heroes);
        })
}

mostrarTitulo = () => {
    const miTitulo = document.createElement('h1');
}

mostrarHeroes = (heros) => {    
    const myHeros = heros['members'];
    console.log(myHeros);
    for (let i = 0; i < myHeros.length; i++ ) {
        
        const tituloNombre = document.createElement('h2');
        const edad = document.createElement('p');
        const identidad = document.createElement('p');
        tituloNombre.textContent = myHeros[i].name;
        edad.textContent = myHeros[i].age;
        identidad.textContent = myHeros[i].secretIdentity;

        contenedor.appendChild(tituloNombre);
        contenedor.appendChild(edad);
        contenedor.appendChild(identidad);
    
    
  }


    }

    
