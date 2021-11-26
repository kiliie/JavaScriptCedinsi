class Persona {
  //propiedad privada
  #cantidadHijos;
  _nacionalidad;
  //Al instanciar se ejecuta el constructor
  //this hace referencia a la clase actual
  constructor(nombres = "", apellidos = "", correo = "", edad = 0) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.edad = edad;
    this.#cantidadHijos = 0;
    this._nacionalidad = "Colombiana";
  }
  get cantidadHijos() {
    return this.#cantidadHijos;
  }
  get getNombres() {
    return this.nombres;
    }
  set setNombres(nombres = "") {
        this.nombres = nombres;
  }

  //Métodos

  getDatos() {
    const datos = `Nombres: ${this.nombres} 
        Apellidos: ${this.apellidos}
        Edad:${this.edad}
        Correo: ${this.correo}`;
    return datos;
  }
  getClasificacion() {
    if (this.edad > 17 && this.edad < 50) {
      return "Persona Adulto";
    } else {
      if (this.edad <= 17) return "Menor de edad";
      else return "Adulto Mayor";
    }
  }
  //método estático
  static algo() {
    return "Soy static";
  }
}
export { Persona };
