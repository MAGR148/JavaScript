//Existen dos formas de declarar un Array
// let miArray = []; - Creando un array con el literal [....]
// let miArray2 = new Array(); - Creando un array con una instancia de la clase Array

let numeros = [1, 2, 3, 4]; // Array de números

let strings = ["Hola", "que", "tal"]; // Array de Strings

let objetos= [{ propiedad: "valor1" }, { propiedad: "valor2" }]; // Array de objetos

let matriz = [
    [2, 4],
    [3, 6],
]; // Array de arrays, (Matriz);

let mixto = [1, true, [3, 2], "Hola", { clave: "valor" }]; // Array mixto

//Métodos de la clase Array en JS
let miArray = [3, 6, 1, 4];
miArray.sort(); // Devuelve un nuevo array con los valores ordenados: [1, 3, 4, 6]
document.write(miArray + " Array ordenado</br>");
miArray.pop(); // Devuelve el último elemento del array y lo saca. Devuelve 6 y miArray queda [1, 3, 4]
document.write(miArray + " Array sin el último elemento</br>");
miArray.push(2); /* Inserta un nuevo elemento en el array, devuelve la nueva longitud 
del array y miArray queda ahora [1, 3, 4, 2] */
miArray.sort();// Aquí volvi a ordenar el array pues el ordenamiento se hizo antes que la inserción
document.write(miArray + " Array con el nuevo elemento insertado</br>");
miArray.reverse(); // Invierte el array, [2,4,3,1]
document.write(miArray + " Array invertido</br>");

//EJEMPLO DEL MÉTODO JOIN

let valor = 3;
const template = [
    "<li>",
    valor,
    "</li>"
].join(" ");
document.write("</br>" + template + "</br></br>"); // Devuelve: "<li>3</li>"

//La función array.map aplica una operación a todos los elementos de un Array
let ejemploMap = [2, 4, 6 ,8];
let raices = ejemploMap.map(Math.sqrt);
// raices: [ 1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903 ]
document.write("Array original [" + ejemploMap +"]-[" + raices + "] sacando raíz cuadrada a un Array con el método map </br>");

//Función Filter - Filtra los elementos de un Array con ayuda de una condición sin necesidad de un bucle
let numFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("[" + numFilter + "] Vector inicial");
let resultado = numFilter.filter(function (elemento) {
    return elemento % 3 === 0;
});
document.write("</br>[" + resultado + "] es el vector filtrado </br></br>");

//Función Slice - Corta el vector para mostrar solo una parte
let sliceVector = [4, 8, 15, 16, 23, 42];
document.write("[" + sliceVector + "] Vector sin cortes </br>");
document.write("[" + sliceVector.slice(2) + "] Vector cortando dos posiciones </br>"); // [15, 16, 23, 42]
document.write("[" + sliceVector.slice(2, 4) + "] Vector colocando un fin de corte </br>"); // [15, 16] (la posición de fin no es inclusiva)
