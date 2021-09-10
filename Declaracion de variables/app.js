/* JS tiene 4 tipos de datos primitivos 
para las variables 
Los cuales son:
 number
 boolean
 String
 Undefined
*/

//Tipo number
let numEntero = 5;
let numDecimal = 14.820
document.write(numEntero + " es un número entero y" + numDecimal +" es un número Decimal <br/>");// Se usa <br/> para el salto de línea porque al usar document write estamos escribiendo HTML


//Tipo boolean
let si = true;
let no = false;
document.write(si + " es verdadero y " + no + " es falso <br/>");

//Tipo String
let cadena = "Mi nombre es Miguel Gómez <br/>";
let segundaCadena = " Las cadenas almacenan palabras";

document.write(cadena, segundaCadena);

//Tipo Undefinedn usado cuando se desconoce el valor de una variable
var dato; // su valor es undefined