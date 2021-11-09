class Carro {
    constructor(modelo, tipo, precio, color, motor) {
        this.modelo = modelo;
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
        this.motor = motor;
    }
    validacion() {
        if ((this.modelo !== "") && (this.tipo !== "")
            && (this.precio !== "") && (this.precio > 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    encender() {
        if (this.validacion()) {
            
        }
        
    }
    acelerar() {
        
    }
    apagar() {
        
    }
}
