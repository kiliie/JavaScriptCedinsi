import { Persona } from "./Persona.js";
class Estudiante extends Persona {
  #promedio;

    constructor(promedio) {
        super();
    this.#promedio = promedio;
  }

  get promedio() {
    return this.#promedio;
  }
}
export { Estudiante };
