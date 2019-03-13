/*

5.  Alguna vez has hablado con las palabras al revés?
vamos a crear una función que invertirá el orden de las letras en un string.

La función se llamará “textInverter()” y recibirá un parámetro (el string a invertir).

La función dividirá ese string letra por letra (función split(“”)
de los strings - mirar apuntes de ayer!) y guardará en una variable
 el resultado (un array de letras).

Luego, sobre esa variable que hemos generado, aplicaremos
la función reverse() de los arrays. El resultado será que nuestro array
de letras estará en orden inverso.

Luego, usaremos la función join(“”) de los arrays sobre nuestro array
invertido (recuerda: si pasamos dos comillas simples “” sin nada como parámetro
  a la función join, nos generará un string con cada letra unida sin espacios ni nada.
  Guardaremos el resultado en una nueva variable.

Finalmente, imprimiremos en la consola el resultado, nuestra palabra invertida.
*/


function textInverter(invertir_este_string){
//dividir el string letra por letra, la función split() nos dará un array con todas
// las letras y podemos guardar este array en una variable:
 var splitArray = invertir_este_string.split("");
//return splitArray; //<--- ya tengo la palabra como un array.
//ahora usando la funcion reverse() (que es para arrays) invertiremos el orden de los valores del array.
var alverre = splitArray.reverse();
var joined = alverre.join("");
console.log(joined);

}
