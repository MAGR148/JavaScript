/*Además de los tipos primitivos que vimos al principio de este libro, JavaScript tiene unas clases
llamadas Core, que forman parte del lenguaje. Las que más se utilizan son Object , Number , Array y
String . Todas ellan heradan de Object.*/

//Un objeto es una colección de variables y funciones agrupadas de manera estructural.
//Las variables que se declaran en un objeto son llamadas propiedades y las funciones se llaman métodos.
const libroReact = {
    titulo: "Desarrollo Web con React",// esta es una propiedad del objeto Clave-Valor
    autor: "Carlos Azaustre",
    paginas: 64,
    formatos: ["PDF", "ePub", "Mobi"],
    precio: 17.99,
    publicado: false,
    leer: function () {//EJEMPLO DE UN MÉTODO DENTRO DE UN OBJETO
        document.write("He leído el libro de React.js y estoy accediendo al métedo del objeto :3");
    },
};

//Acceso a las propiedades de un objeto
document.write(libroReact.titulo + " es el título del libro </br>");
document.write(libroReact["paginas"] + " es el total de páginas </br>"); 

//Modificando el valor de las propiedades
libroReact.titulo = "He cambiado el nombre del libro";
libroReact.paginas = 150; 

//Visualizamos los cambios
document.write(libroReact.titulo + " es el nuevo título del libro </br>");
document.write(libroReact["paginas"] + " es el total de páginas actualizado</br></br>"); 


libroReact.leer(); //Accedemos al método que definimos