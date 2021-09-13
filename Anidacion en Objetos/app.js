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