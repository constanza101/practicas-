// Hacer un array con los meses del año:

year = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
console.log(year)

// elegir un mes al azar

var indice = Math.floor(Math.random() * 11)

console.log(year[indice])




/*

year [2]  ---> "marzo"

year [Math.random()]  ---> numero random entre 0 y 1 (pero da undefined)

entonces multiplicamos el "Math.random" x11,
para que el número vaya desde 0 hasta 11,

year [Math.random()] * 11

Esto nos daría numero random entre 0 y 11, con decimals incluidos.

Para que nos de numeros enteros, usamos Math.floor(numero)
en este caso, "numero" lo reemplazamos por el numero random,
o sea "Math.random"

QUEDARÍA ASÍ:

year[Math.floor(Math.random() * 11 )]
*/



//hacer una estructura de control (if/else y switch/case)
// para comprobar qué estación se corresponde al mes.






if(year[Math.floor(Math.random() * 11 )] == "enero") {
  console.log("invierno")
}
else if(year[Math.floor(Math.random() * 11 )]== "febrero"){
  console.log("invierno")
}
else if(year[Math.floor(Math.random() * 11 )]== "marzo"){
  console.log("primavera")
}
else if(year[Math.floor(Math.random() * 11 )]== "abril"){
  console.log("primavera")
}
else if(year[Math.floor(Math.random() * 11 )]== "mayo"){
  console.log("primavera")
}
else if(year[Math.floor(Math.random() * 11 )]== "junio"){
  console.log("verano")
}
else if(year[Math.floor(Math.random() * 11 )]== "julio"){
  console.log("verano")
}
else if(year[Math.floor(Math.random() * 11 )]== "agosto"){
  console.log("verano")
}
else if(year[Math.floor(Math.random() * 11 )]== "septiembre"){
  console.log("otoño")
}
else if(year[Math.floor(Math.random() * 11 )]== "octubre"){
  console.log("otoño")
}
else if(year[Math.floor(Math.random() * 11 )]== "noviembre"){
  console.log("otoño")
}
else if(year[Math.floor(Math.random() * 11 )]== "diciemrbre"){
  console.log("invierno")
}
else{"primavera"}





if (
  (year[Math.floor(Math.random() * 11 )] == "diciembre") ||
  (year[Math.floor(Math.random() * 11 )] == "enero") ||
  (year[Math.floor(Math.random() * 11 )] == "febrero")
)
{console.log("invierno")}

else if(
  (year[Math.floor(Math.random() * 11 )] == "marzo") ||
  (year[Math.floor(Math.random() * 11 )] == "abril") ||
  (year[Math.floor(Math.random() * 11 )] == "mayo")
)
  {console.log("primavera")}

else if(
  (year[Math.floor(Math.random() * 11 )] == "junio") ||
  (year[Math.floor(Math.random() * 11 )] == "julio") ||
  (year[Math.floor(Math.random() * 11 )] == "agosto")
)
  {console.log("verano")}

  else{"otoño"}


  // SWITCH/CASE


  switch (year[Math.floor(Math.random() * 11 )]) {
    case "enero":
    case "febrero":
    case "marzo":
      console.log("invierno")
      break;
    case "abril":
    case "mayo":
    case "junio":
      console.log("primavera")
      break;
    case "julio":
    case "agosto":
    case "septiembre":
      console.log("verano")
      break;
    case "octubre":
    case "noviembre":
    case "diciembre":
      console.log("otoño")
      break;

    default: "revisa el codigo boluda"
  }

// Bucles:

for(var i=0; i<100; i++){console.log(i)}

// hacer un bucle de 50 a 200, que nos de como resultado
//un numero = al valor de i en cada iteraccion
//y un mes al azar usando la función anterior.
//i irá aumentando de 1 en 1 (i++)

for(var i=50;i<200;i++) {
  console.log(i);
  console.log(year[Math.floor(Math.random() * 11 )])
}

//reutilizando la estructura del bucle, vamos a cambiar
//los "contenidos":(es lo que tenemos entre {})



for(var i=50;i<200;i++){
  switch (year[Math.floor(Math.random() * 11 )]) {
    case "enero":
    case "febrero":
    case "marzo":
      console.log("invierno")
      break;
    case "abril":
    case "mayo":
    case "junio":
      console.log("primavera")
      break;
    case "julio":
    case "agosto":
    case "septiembre":
      console.log("verano")
      break;
    case "octubre":
    case "noviembre":
    case "diciembre":
      console.log("otoño")
      break;

    default: "revisa el codigo boluda"
  }
}


//while
year = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

var mes=year[Math.floor(Math.random() * 12 )];

  while (mes != "diciembre") {
      console.log(mes);
      mes=year[Math.floor(Math.random() * 12 )]
  }

//inline if:
  var varname = (id==1?"gabriel":"constanza")

  //Traducido:
  //la variable de nombre "varname"=
// si la variable "id" es igual a 1, "?" (then) --Gabriel ":" (else)--> Constanza




//--------------

EJEMPLO GUEPARDO

//si zafari[i]="guepardo"    if
//entonces
// recorrer la palabra guepardo
// for (i = 0, i menor tamano palavra guepardo, i mas 1)
// imprimir cada letra    str[i]

zafari=["jirafa","elefante","guepardo","cebra", "leon"];
console.log(zafari)


var i = 0;
while(zafari[i]!="guepardo"){
    console.log("no");
    i++
}

/*

---> despues de hacer el bucle, llamo a la variabl i
en la consola y me dará el valor de i (o sea donde está
la palabra guepardo ubicada en el array)

por lo tanto, cuando quiera usar la palabra guepardo
puedo usar zafari[i] que es lo mismo que escribir "guepardo"

*/

// recorre todo el array de animales (version Jose)


for (var h = 0; h < zafari[i].length; h++){
  console.log(zafari[i][h])
}

/*for: en este caso es un bucle que itera sobre "guepardo"
(o que es lo mismo zafari[i]), desde el valor 0, que es el
primer indice (o sea G) hasta el último, o sea "O",
imprimiendo en cada iteracción, cada uno de los índices,
que en este caso, como es un string, en los índices hay
letras/caracteres.
*/

// recorre todo el array de animales (versión práctica Gabi)

var zafari=["jirafa","elefante","guepardo","cebra", "leon"];
console.log(zafari)


var g = "guepardo";
var h = 0
//var g=[gepardo]

for (var i = 0; i < zafari.length; i++){
  if (zafari[i] == g){
    for(var h = 0; h < g.length; h++){
      console.log(g[h])
    }
  }
  else {
    console.log("no encontre")
  }
}


//1. crear un array de 1 a 100:
//2. crear un array vacío:
var arr1=[];
var arr2=[];


for(var i = 1; i<100;i++){
    arr1[i-1]=i
}

//imprimir los valores de i
for(var i = 0; i < arr1.length: i++){
  console.log(arr1[i])
}

//para utilizar los impares:
for(var i = 0; i < arr1.length: i++)

 if (arr1[i] % 2 != 0{
    arr2[i] =  arr1[i]; //<--- si lo dejo así, me quedaran huecos cuando es par.
 }

// entonces tengo que hacer push.

if (arr1[i] % 2 != 0{
   arr2[i] =


//3. recorrer en bucle el arr1 y comprobar si cada
//iteraccion es par o impar.
//(o comprobar cuál es impar)


// if %2=0{es par y hay que poner en arr2



var numeros = [2,4,6,8,10,7,12,14]

objetivo: encontrar un número impar entre un listado de números pares.

Enunciado:
Crear un bucle que itera sobre un listado de números.

En cada iteracción, comprobar (if) si ese número es par
(o dicho de otra forma: al dividir ese núnero entre dos,
nos da de resto 0? ).

Si lo es, imprimimos el resultado de multiplicarlo por 10.


for (i = 0; i < numeros[i]; i++){
  if(i % 2 == 0){
    console.log(numeros[i]*10)
  }
}


-----------------


var productos = [ "movil", "boli", "taza"]
var ventas =  [ 3, 12, 7]

objetivo:
Encontrar cuántas ventas ha habido de tazas.

Enunciado:
crear un bucle que itera sobre el listado de productos.

en cada iteracción, comprobar si ese producto es la taza.

si lo es, imprimir el elemento de ventas, que esté en la
posición en la que está "taza"

var productos = [ "movil", "boli", "taza"]
var ventas =  [ 3, 12, 7]

for(var i=0 ; i < productos.length; i++){
    if( productos[i] == "taza"){
      console.log(productos[i], ventas[i])
    }
}

------------



objetivo: Encontrar cuantos años ha vivido el hornitorrinco.

Enunciado:

crear un bucle que itere sobre el listado de animales.

en cada iteracción, comprobar si ese animal es el hornitorrinco.

si lo es, imprimir el valor de la edad que está en la misma
posicion i, que la palabra hornitorrinco;



var animales=[ "gato", "perro", "hornitorrinco"];
var vida=[12,20,700];


for(i=0; i<animales.length;i++){
  if(animales[i]=="hornitorrinco"){
    console.log(vida[i])
  }
}


--------------------------------------



Objetivo: imprimir un triángulo;

*
**
***
****
*****
******
*******

Enunciado:
Recorrer en un bucle los números del 1 al 7.
En cada iteracción de este bucle, se inicia un nuevo bucle.
Este segundo bucle, recorre los números desde 1 hasta el
número de la iteracción del primer bucle (o sea, i).

En cada iteracción de este segundo bucle, se imprime un asterisco *



for(var i =1; i<8; i++){
  console.log("*".repeat(i))
}


-----------;

Escribe un bucle que imprima la tabla de multiplicar del 4.

bucle que itera del 1 al 10, imprimiendo una linea en cada iteraccion;

for(i=1;i<11;i++){
  console.log("4x",i,"=", i*4)
}





---------------

bucle que imprima las letras del abecedario;

var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

for(i=0;i<abecedario.length;i++){
  console.log(abecedario[i])
}


------------------;

Objetivo:
Encriptar la palabra "hornitorrinco";
Enunciado: crear un bucle qe itere sobre la palabra hornitorrinco.
En cada iteracción, imprimiremos la letra correspondiente a i + 3.

var a = "hornitorrinco";

for(i=0; i < a.length; i++){
    console.log(a[i])
}

usando la función indexOf (índice de) encriptaremos la palabra
reemplazando cada letra por la que se encuentra en el índice
3 posiciones más adelante.

Primero: cómo se usa indexOf:

var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

abecedario.indexOf("c")  ---> me dará el número de la posición (indice) de C en el array abecedario.


Entonces, según el for anterior, donde a[i] me da como
resultado la impresión de cada letra en cada iteracción,
, imprimiremos la letra que se encuentra 3 posiciones más
adelante para cada una de ellas.

var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
var a = "hornitorrinco";

for(i=0; i < a.length; i++){
    var num = abecedario.indexOf(a[i])+3
    console.log(abecedario[num])
};

Ejercicio:
hacer el proceso contrario.

var b = "kruplwruulpfr";

for(i=0; i < b.length; i++){
    var num = abecedario.indexOf(b[i])-3
    console.log(abecedario[num])
};

-----------------


Crear un array vacío.
pushear los números del 1 al 10.

a=[];


for(i=1; i<11; i++){
  a.push(i)
}

---> resultado: a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Luego haremos un bucle que iterará sobre este array.

En cada iteracción comprobará si el valor de a[i]
es el 3 o el 7.

Si es el 3 o el 7, los "pusheara " dentro de b[]


b=[]

for(i=0; i<a.length; i++){
  if(i == 3 || i == 7){
    b.push(i)
  }
}


------------------
tengo un array vacío (var letras)
y una variable (var palabra) = a un string que dice "patineta"

quiero hacer push de la palabra patineta, dentro
del array vacío;

var letras = [];
var palabra = "patineta";

for(i=0;i<palabra.length;i++){
  //para obtener la impresion de las letras de "patineta"
  //console.log(palabra[i])
  letras.push((palabra[i]))
}


-------------;

//ahora para la misma variable
var palabra= "patinete"
/*usamos el bucle para pushear las letras que no estén
repetidas, dentro de una nueva variable
qu eserá un array, inicialmente vacío: */
var letras_unicas = []

for (var i = 0; i < palabra.length; i++) {
  //console.log(palabra[i])}
    for (var j = 0; j < letras_unicas.length; j++) {
      if (palabra[i] !== letras_unicas[j]) {
        letras_unicas.push((palabra[i]))
      }
    }
}

....................
...................



EJERCICIOS PARA LA TARDE:


1. Crear un bucle que recorra la palabra "constanza";
(Partiendo de que tenemos otra variable, que es un
array con todas las letras del abecedario en orden alfabético.)
Primero: cómo se usa indexOf:

var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

abecedario.indexOf("c")  ---> me dará el número de la posición (indice) de C en el array abecedario.

var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
var yo = "constanza";

//En cada iteracción cambiará cada letra por la letra que
//haya 3 posiciones más a la derecha en el abecedario.


for (var i = 0; i < yo.length; i++) {
  console.log(yo[i])
  }

//Hasta acá veo que yo[i] irá dandome las letras de constanza una a una en cada bucle.
// Ahora debo sacar en qué índice de var abecedario se encuentran estas letras.
//Esto lo puedo averiguar con abecedario.indexOF(letra que quiero saber el índice)
//para que recorra todas las letras, tendré que reemplazar
// las letras, por "yo[i]" dentro del bucle.

for (var i = 0; i < yo.length; i++) {
  console.log(abecedario.indexOf(yo[i]))
  }

  //esto me dio el index actual de las letras dentro del array abecedario.
  // luego quiero que me mueva 3 posiciones hacia la derecha
  // o sea incrementando este valor en +3

  for (var i = 0; i < yo.length; i++) {
    var index_abc = (abecedario.indexOf(yo[i]))
    console.log(abecedario[(index_abc+3)%27])
    }

//esta sería la solución agrandando la cantidad
//de index en var calendario,  si sabemos que estamos usando la ultima letra.


2.......................

//crear un array vacío llamado "nomeros"

var numeros = []

//crear un bucle que recorra los números del 1 al 100:


for (var i = 1; i < 101; i++) {
  console.log(i)
}

//lo que hemos hecho nos imprimirá todos los valores del 1 al 100, uno a uno.


//En cada iteracción, usaremos la función numeros.push(i)
//para guardar el número de la iteracción en el array numeros

//como resultado nos quedará un array con los números del 1 al 100.

//para hacer push dentro de un array, ponemos el nombre del array
// que ya ha sido declarado (vacío en este caso).
//y lo ponemos dentro del bucle para que el valir de i
//vaya cambiando como indicamos (en este caso de uno en uno, porque i++)

for (var i = 1; i < 101; i++) {
  numeros.push(i)
}



3................

//Crear otro array que esté vacío, en este caso lo llamaremos
//"numeros pares"

var numeros_pares = [];
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

//recorremos en bucle el array del ej. anterior "numeros"
//comprobando en cada iteraccion, si el valor de i es par o impar.
// o sea, que si dividimos ese número en 2, el resto es igual
// a 0 o 1.
// si es par, el numero se añadirá al array numeros_pares


for (var i = 0; i < numeros.length; i++) {
   if (i % 2 == 0) {
     numeros_pares.push(i)
   }
}



4.................;


//usando los arrays:

var animales = ["elefante", "perro", "ballena"];
var peso = [5000, 50, 20000];

//(teniendo en cuenta de que estan ordenados por igual)

//imprimir la especie y peso del perro. o sea: (perro, 50)

//-------------

//1ro tengo que encontrar la palabra perro en var animales:

for (var i = 0; i < animales.length; i++) {
  if(animales[i] == "perro") {
    console.log(animales[i]+peso[i])
  }
}

............;

//como lo haría con while:
var animales = ["elefante", "perro", "ballena"];
var peso = [5000, 50, 20000];

//Primero declaro un valor para i inicial, afuera del bucle:

var i = 0;

//después comienzo el bucle while, que seguirá "girando" mientras que
// la variable animales no sea ifual a perro, o sea que mientras
// que animales ≠ perro sea true, sigue con la siguiente vuelta.

while(animales[i] != "perro"){
  i++;
}

//con while se corre peligro de que si hay algún error de tipeo
//en el código, pueda generarse un bucle infinito, que no terminaría
//nunca y que consume tantos recursos que podría arruinar el trabajo.

//para evitar que esto suceda, podemos agregar un "break" para un máximo
//valor de i. Así:

while(animales[i] != "perro"){

    if(i > 3){break;}  // <---- esto hará que después de la 3ra vuelta, el bucle se termine.

  i++;
}

// luego, si quiero imprimir la palabra perro y su peso, solo tengo
// que escribir las variables con el nuevo valor de i:


console.log(animales[i], peso[i]);

// o bien:

console.log(animales[i]+""+peso[i]) //<--- cuando se usa el +, se llama concatenación y no deja espacios, por eso agregué un espacio entre comillas.






5...............
// usando los arrays del ej anterior,

var animales = ["elefante", "perro", "ballena"];
var peso = [5000, 50, 20000];

//hacer un bucle que recorra el listado de pesos.

for (var i = 0; i < peso.length; i++) {
  peso[i]
}

// en cada iteracción comprobar si es superior a 1000.
//si lo es, imprimir en la pantalla un título; "Animales grandes" y los animales correspondientes:

for (var i = 0; i < peso.length; i++) {
  if (peso[i] > 1000) {
    console.log("Animales Grandes", ":" , animales[i])
  }
}



6.....................;
// crear un array vacío llamado letras.
var letras = []
// crear una variable string con la palabra "pizarra"
var  j = "pizarra"

//crearemos un bucle que iterará con la palabra "pizarra".
for (var i = 0; i < j.length; i++) {
  letras.push(j[i])
}

//en cada iteracción pushearemos (usando la función .push)
//cada letra de la palabra para adentro del array letras.
