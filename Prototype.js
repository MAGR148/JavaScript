//Ejemplo del uso de prototype para crear inventarios 


function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = {};
    }
Inventario.prototype = {
    add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function (nombre) {
        return this.articulos[nombre];
    },
    getNombre: function () {
        return this.nombre;
    },
};

const libros = new Inventario("Libros");
const discos = new Inventario("discos");
const juegos = new Inventario("juegos");
const comics = new Inventario("comics");

libros.add("React.js", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("React.js"); // 3
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");
libros.cantidad("JavaScript"); 

comics.add("Batman", 10);

libros.getNombre();