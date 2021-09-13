//parseInt() - Devuelve el número decimal equivalente al string que se pasa por parámetro
let cadNumero = "14820";
document.write (parseInt(cadNumero) * 2 + "</br>");

//parseFloat() - Evalua si es un número de punto flotante y devuelve la representación en decimal
document.write(parseFloat("5e3") + " es igual que 5e3 </br>");

/*number.toFixed(x) - Devuelve un string con el valor del numero number redondeado al alza, con tantos decimales como
se indique en el parámetro x. */
let n = 8.1315;
document.write(n.toFixed(0) + "</br>"); // Devuelve "8"
document.write(n.toFixed(2) + "</br>"); // Devuelve "8.13"

/* number.toExponential(x) - Devuelve un string redondeando la base o mantisa a x decimales*/ 
let n1 = 2.5674;
document.write(n1.toExponential(2) + "</br>");//Devuelve "2.56e+0"

/*number.toString(base) - Devuelve un string con el número equivalente number en la base que se pasa por parámetro. */
document.write((15).toString(10) + " en base 10</br>"); // Devuelve el en base decimal
document.write((15).toString(2) + " es 15 en binario </br>"); // Devuelve el número decimal en binario
document.write((15).toString(16) + " es 15 en hexadecimal</br>"); // Devuelve el número decimal en hexadecimal
document.write((15).toString(8) + " es 15 en octal</br>"); // Devuelve el número decimal en octal