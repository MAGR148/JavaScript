var valor = prompt("Dime la contraseña", ""); // prompt pide datos al usuario, lleva dos parámetros el primero
//es el texto que se mostrará y el segundo es un valor predeterminado.
if( valor == "123456" )
{
    alert("La contraseña es correcta");
}
else
{
    alert("Contraseña no válida: [" + valor + "]");
}