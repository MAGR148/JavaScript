//Existen dos maneras de crear una string que son las siguientes
const texto = "Hola Mundo";
const texto2 = new String("Hola Mundo");

//Los String se comportan como un Array
console.log(texto[2] + "\n");

//Podemos obtener el tamaño de nuestra cadena
console.log(texto2.length + "\n");

//Podemos obtener el valor UNICODE de un valor en específico
console.log(texto.charCodeAt(2) + "\n");

//Se puede obtener el índice donde comienza una parte específica del String
console.log(texto2.indexOf("Mundo"));

//Además podemos obtener subStrings pasando un rangi de indices
console.log(texto.substring(3, 8));

