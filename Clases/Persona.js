class Persona {
    constructor(nombres, apellidos, correo, edad) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.edad = edad;
    }
    getDatos() {
        const datos = `Nombres: ${this.nombres} 
        Apellidos: ${this.apellidos}
        Edad:${this.edad}
        Correo: ${this.correo}`;
        return datos;
    }
    getClasificacion() {
        if ((this.edad > 17) && (this.edad < 50)) {
            return "Persona Adulto"
        } else {
            if (this.edad <= 17) return "Menor de edad";
            else return "Adulto Mayor";
        }
    }


}
export { Persona }