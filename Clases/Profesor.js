import { Persona } from "./Persona.js";

class Profesor extends Persona {
    constructor(nom,ape,correo,edad,horas, costoHora) {
        super(nom,ape,correo,edad);
        this.horas = horas;
        this.costoHora = costoHora;
    }
    getCalculoSueldo() {
        return this.horas * this.costoHora;
    }
}
export { Profesor }