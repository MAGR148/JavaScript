class Vehiculo {
    constructor(tipo, nombre, ruedas) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ruedas = ruedas;
    }
    getRuedas() {
        return this.ruedas;
    }
    arrancar() {
        console.log(`Arrancando el ${this.nombre}`);
    }
    aparcar() {
        console.log(`Aparcando el ${this.nombre}`);
    }
}

//Ejemplo de la gerencia entre clase "EXTENDS y super()"
class Coche extends Vehiculo {
    constructor(nombre) {
        super("coche", nombre, 4);
    }
}
    
let fordFocus = new Coche("Ford Focus");
fordFocus.getRuedas(); // 4

fordFocus.arrancar(); // Arrancando el Ford Focus