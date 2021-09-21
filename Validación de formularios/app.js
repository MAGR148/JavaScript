var nombre = document.getElementById('nombre');
var pass = document.getElementById('pass');
var error = document.getElementById('error');

error.style.color = 'red';

function enviarFormulario(){
    console.log("Enviando formulario...");

    var mensajeError = [];

    if(nombre.value === null || nombre.value ===''){
        mensajeError.push('Ingresa tu nombre');
    }

    if(pass.value === null || pass.value === ''){
        mensajeError.push('Ingresa tu contraseña');
    }

    error.innerHTML = mensajeError.join(', ');

    return false;
}