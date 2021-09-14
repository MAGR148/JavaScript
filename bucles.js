//Aqui colocaré ejemplos de los bucles que me resultaron más interesantes

//Bucle For Each  

const miArray = [1, 2, 3, 4];
miArray.forEach(function (elemento, index) {
    console.log("El valor de la posición " + index + " es: " + elemento);
});

/* Este bucle es un método de la clase Array
Si queremos usarlo en un objeto deberíamos 
hacer lo siguiente: */

const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    numPaginas: 96,
    editorial: "carlosazaustre.es",
    precio: "17.95",
};

const propiedades = Object.getOwnPropertyNames(libro);
propiedades.forEach(function (name) {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value;
    console.log("La propiedad " + name + " contiene: " + valor);
});

/* Ahora si lo que deseamos es un bucle especialmente
para un objeto podemos usar el bucle For In*/

console.log("FOR IN \n")
for (let prop in libro) {
    console.log("La propiedad " + prop + " contiene: " + libro[prop]);
}
    