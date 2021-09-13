var valor = prompt("Dime la contraseña", ""); // prompt pide datos al usuario, lleva dos parámetros el primero
//es el texto que se mostrará y el segundo es un valor predeterminado.
if( valor == "123456" )
{
    alert("La contraseña es correcta");
}
else if(valor == "123" || valor == "1234")
{
    alert("Contraseña no válida: [" + valor + "] pero estas cerca");
}else{
    alert("Estas frío");
}