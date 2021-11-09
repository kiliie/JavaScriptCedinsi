class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.datos =`El nombre de la persona es: ${this.nombre} y la edad ${this.edad}`       
    }
    metodoEdad() {
        let mensaje = '';
        if (this.edad >= 18) {
            mensaje = ("Es mayor de edad");
        } else {
            mensaje = ("Es menor de edad");
        }
        return mensaje;
    }
}
const calculo = document.getElementById('persona');
calculo.onclick = function () {
    const nombre = document.getElementById('nombre').value;    
    console.log(nombre);
    const edad = document.getElementById('edad').value;    
    const miPersona = new Persona(nombre, edad);// instancio o creo objeto
    const mensajeClase = miPersona.metodoEdad();
    alert(miPersona.datos);
    alert(mensajeClase);
    console.log(miPersona.edad);
}