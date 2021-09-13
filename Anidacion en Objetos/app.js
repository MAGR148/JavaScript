//Un objeto puede tener propiedades y estas propiedades tener en su interior más propiedades.

const libro = {
    titulo: "Desarrollo Web con React.js",
    autor: {
        nombre: "Carlos Azaustre",
        nacionalidad: "Española",
        edad: 36,
        contacto: {
            email: "carlosazaustre@gmail.com",
            twitch: "https://twitch.tv/carlosazaustre", 
        },
    },
    editorial: {
        nombre: "carlosazaustre.es Books",
        web: "https://carlosazaustre.es",
    },
};

// Podemos acceder con notación punto, array, o mixta.
document.write(libro.autor.nombre + "</br>"); 
document.write(libro["autor"]["edad"] + "</br>"); 
document.write(libro["editorial"].web + "</br>"); 
document.write(libro.autor["contacto"].twitch + "</br>");


//Igualdad entre objetos
const coche1 = { marca: "Ford", modelo: "Focus" };
const coche2 = { marca: "Ford", modelo: "Focus" };
const coche3 = coche1

if(coche1 === coche2){
    document.write("Primer True </br>");
}else{
    document.write("Primer False </br>");
}
if(coche1.modelo === coche2.modelo){
    document.write("Segundo True </br>");
}else{
    document.write("Segundo False </br>");
}
if(coche1 === coche3){
    document.write("Tercer True </br>");
}else{
    document.write("Tercer False </br>");
}

 