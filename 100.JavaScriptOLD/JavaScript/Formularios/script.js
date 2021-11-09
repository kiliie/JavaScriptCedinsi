/*const titulo = document.getElementById('titulo');
console.log(titulo);
titulo.textContent = 'Estoy cambiando el titulo con textContent';


const parrafo = document.querySelector('.parrafo:nth-child(1)'); // para clases .
console.log(parrafo);

const javascriptStrong = parrafo.querySelector("strong");
console.log(javascriptStrong.textContent);

const buscador = document.getElementById("subtitulo").querySelector('strong');
console.log(buscador.textContent);

const listaMascotas = [ 
{"nombre":"fifi","tipo":"perro","dueño":"Rafael Pombo"},
{"nombre":"chumi","tipo":"perro","dueño":"Andres Segura"},
{"nombre": "almudena", "tipo": "gato", "dueño": "José Garrido" },
{"nombre":"kiki","tipo":"gato","dueño":"Aurora Perez"}
];

for (let mascota in listaMascotas) {
    console.log(`No ${mascota}: nombre de la mascota: ${listaMascotas[mascota].nombre} `);  
 
}

function mayuscula() {
    const p = document.getElementById('idstrong').innerHTML;    
    document.getElementById('idstrong').innerHTML = p.toUpperCase();
}
function minuscula() {
    const p = document.getElementById('idstrong').innerHTML;
    document.getElementById('idstrong').innerHTML = p.toLowerCase();
}

const mostrarAlerta = () => {
    alert("Es una alerta con función flecha");
}
const interes = () => {
    let dinero = document.getElementById('dinero').value;   
    dinero = parseInt(dinero);
    dinero = (dinero * 1.14);    
    alert('El capital mas interes es:'+dinero);
}

calculoInteres.addEventListener('click', interes);


*/

const recogeFormulario = () => {
    if ((document.forms.nombre.value === "") || (document.forms.apellido.value === "")
        || (document.forms.edad.value === "")) {
        alert('Hay campos vacios');
        return;
    }
    if (document.forms.correo.value !== "") {        
        const emailRegex = '(([a-z0-9]+)([@])([a-z]+)([.])([a-z]{2,3}))';
        const email = document.forms.correo.value.toLowerCase();        
        if (!email.match(emailRegex)) {
            alert('Correo Inválido');
            return;
        }
    } 
    //Luego de validar que todo está bien, mandamos los datos    
}


let dinero = document.getElementById('dinero');

dinero.onfocus = function(){
    const aviso = document.createElement("p");
    aviso.id = "aviso";
    aviso.innerText = "Digíte la cantidad de dinero que desea prestar"
    aviso.style = "color: blue";
    dinero.insertAdjacentElement('afterend', aviso);    
}
dinero.onblur = function () {
    document.getElementById("aviso").remove();
}

const calculoInteres = document.getElementById('btncalculo');






























