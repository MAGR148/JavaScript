//Declaracion de una función para saludar
function saludar(nombre) {
    return "Hola " + nombre + "!";
    }
saludar("Miguel");

//Si no pasamos el argumento obtendremos un undefined.
//Para evitar esto podemos usar parámetros prod efecto
//Los parámetrso por defecto podemos asignarlos un el operador booleano OR.

function saludo(tipo, nombre) {
    const type = tipo || "Hola";
    const name = nombre || "Carlos";
    return type + ", " + name + "!";
    }
//NOTA ---> Ejecutar el llamado de manera indvidual

saludo(); // "Nos devuelve los dos parámetrso por defecto"
saludo("Bye"); // "El primer parámetro lo pasamos pero el segundo es el de por defecto"
saludo("Hasta luego", "Usuario"); // Pasamos los dos parámetros

//A partir de ES6+ se pueden definir los parámetros indicando el valor que deben tomar

function saludando (tipo = "HOLA" , nombre = "Miguel"){
    return `${tipo}, ${nombre}!`
}

saludando();
saludando("Adios");
saludando("Hasta luego", "Pepe"); 
    