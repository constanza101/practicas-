FUNCIONES AVANZADAS

Paradigmas de la programación:
*** son diferentes técnicas/caminos para programar.

- Programación orientada a objetos (P.O.O.)
- Programación funcional
- Programación declarativa (no es muy usada)


** PROGRAMACIÓN-ORIENTADA-A-OBJETOS(P.O.O.) **
no lo usaremos mucho en proyectos pequeños.

un objeto en javascript son los que estamos llamando DICCIONARIO

nombre = { clave : valor }

el valor puede ser una variable, o puede ser una función..
si es una variable, diremos que es una PROPIEDAD del objeto.
si es una función, diremos que es un MÉTODO del objeto (cosas que se pueden hacer con él).


por ejemplo, tenemos un objeto con una propiedad:


profesor = { "nombre" : "Jose"}

alumna={"nombre":"constanza","saluda_jose":funcion(){
                                            yo["nombre"]="hola"} //<--- aquí cambio "jose" x "hola" para la utilizción de este objeto en mi función.
}

//Este caso es muy simplificado.
//la POO se basa en otros tipos de datos llamados CLASES.

CLASES
sirven como una plantilla para generar varios objetos.

LEER más: buscar "poo js" hay mucho contenido;


TRES PRINCIPIOS BÁSICOS DE LA POO

- ENCAPSULACIÓN (significa que los métodos no son accesibles para todo el código, sino solo para el objeto propietario.)
- HERENCIA (es que un objeto puede heredar las propiedades de otro)
- POLIMORFISMO ( viene de "muchas formas" se refiere a la capacidad de los objetos, de tener - cuando los "instancias" en base a una clase, le puedes meter parámetros como a las funciones, y estos parámetros pueden afectar al objeto mismo. POR EJ:  newpersona(parametro{clave:valor} ))


--------------

*** PROGRAMACIÓN FUNCIONAL ***
estructura el código en base a FUNCIONES.

1ro tienes un bloque donde están declaradas las funciones.
2do tienes un bloque "main" donde se invoca en orden a esas funciones.

*recordar: tiene que haber siempre una primera función que invoque a las demás.
EJ.

1er bloque:
function say_hello(){console.log("hola")}
function say_name(nombre){console.log(nombre)}

2do bloque:
()(function{
  say_hello();
  say_name("Jose");
})

*siempre que sea posible hay que intentar que las variables sean LOCALES
 (recordar:SCOPE)
* CREAR FUNCIONES SIMPLES:
crear funciones que tengan un objetivo concreto y único. PARA QUE SEAN SIMPLES.
-----

FUNCIONES ANIDADAS:

………....

FUNCIONES QUE "CREAN" FUNCIONES

EJ:
function suma ( num1, num2){
  return num1 + num2
}

invocamos, pasando los parámetros que queremos x ej 1, 2
suma (1, 2)// nos retorna: 3

Mismo ejemplo pero en lugar de retornar el valor, nos retorna una
función que hace lo mismo;

function padre_suma(num1, num2){
  function suma (num1, num2){
    return num1 + num2
  }
  return suma(num1, num2)
}

padre_suma(1,2)//nos retorna una función que a su vez retorna: 3

-----------------
CLOSURES
* Es algo que contiene una función + las variables que existían en
si SCOPE cuando esta función fue creada.


-------

FUNCTION FACTORY
funciones que retorna closures.
sirve para tener una función que genere otras funciones.

function creaMultiplicador(x){
  return function(y){
    return x*y;
  };
}

creo una variable a la que le asigno el resultado de
ejecutar la function factory, a la que le asigno un valor de x:

var multiplica5 = creaMultiplicador(5);
var multiplica10 = creaMultiplicador(10);
// Así he creado dos closures. Uno me servirá para multiplicar
// 5 por los valores de y que le pongamos, y el otro me servirá
// para multiplicar 10 por los valores de y que le diga.
// se utilizarán de la siguiente manera:

multiplica5(2) <---- donde el 2 será el valor de y (el valor de x está encerrado dnetro de multiplica5 - esta closure.)
multiplica10(3) <---- donde el 3 será el valor de y (el valor de x está encerrado dnetro de multiplica10 - esta closure.)

para imprimir el resultado:

console.log(multiplica5(2)) // me imprimirá: 10
console.log(multiplica10(3)); // me imprimirá: 30

-------------

EJERCICIOS FUNCTION FACTORY

1..........


function function_factory(x){
  return function(y){
    return x+" "+y; //<--- lo concatenamos, porque los return devuelven un único valor, no podría devolver, x,y.
  }
}


var saluda_castellano = function_factory("hola");
saluda_castellano("Jose") //resultado: “hola Jose” <--- CUIDADO con las comillas especiales. HAY CARACTERES QUE SON PARECIDOS PERO NO SON LOS MISMOS:





var saluda_ingles = function_factory(“hello”);
saluda_ingles(“Constanza”) //resultado: “Hello Constanza”




----------------
RECURSIVIDAD.

EJ 1:

La función se autoinvoca a si misma;

function loop(i){
  console.log("akuna matata", i);
  i++;
  if(i<10){saluda(i)};
};

saluda(0); //<--- esta sería la primera activación (trigger) (detonante)


VENTAJA FRENTE A LOS BUCLES:
nos da mayor control sobre las iteracciones.
a demas de tener el parametro i, podemos agregar tantos parámetros como queramos
con esto podemos hacer que la recursión vaya en un sentido o en otro.
o sea, podremos hacer más opciones de return, que corresponderán a
diferentes parámetros.


EJ 2:

function la_de_siempre(){
  console.log("surprais");
  function no_te_lo_esperabas(){
    console.log("hi");
    no_te_lo_esperabas();
  }
  la_de_siempre();
}

la_de_siempre(); //<<<<-- invocamos (activamos)



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



var g = "guepardo";
var zafari=["jirafa","elefante","guepardo","cebra", "leon"];


function encuentraAnimal(i){
  console.log("vuelta numero",i);
  if (zafari[i] == "guepardo"){
    console.log(i)
  }
  p=i+1;
  if(i<10){encuentraAnimal(p)};
}

encuentraAnimal(0)

//recorrer las letras de la palabra guepardo, buscando la legra g,
//cuando la encuentre, que imprima "encontrado"


var zafari=["jirafa","elefante","guepardo","cebra", "leon"];
function encuentraAnimal(i){
  console.log("vuelta numero ",i, "de la función encuentraAnimal");
  if (zafari[i] == "guepardo"){
    function letras(z){
      console.log("vuelta numero ",z, "de la función letras");
      if(zafari[i][z] == "p"){
        console.log("encontrado", z);
      }
      z++;
      if(z < palabra.length ){
        letras(z)
      }
    }
    letras(0)
  }
  i++;
  if(i<zafari.length){encuentraAnimal(i)};
}
encuentraAnimal(0)



------------




SET TIME OUT:
* setTimeout(funcion, milisegundos)*
pone un contador en la ejecución de la función, pero
no detiene la ejecución del script.
a menudo lo usaremos con las funciones recursivas,
para que vaya refrescándose a sí misma cada x segundos.
por ejemplo es util para las notificaciones o actualización de noticias.

SET INTERVAL:
** setInterval(funcion, milisegundos)*
a demás de esperar x milisegundos para ejecuarse,
lo vuelve a hacer infinitas veces, en intervalos de x milisegundos.
- el setInterval no se puede detener.(podríamos forzar la detención pasando una función que sea nula.)


setInterval(saludo, 2000)



function saludo(){
  console.log("hola")
}

for(var i=0;i<3;i++){
  setTimeout(saludo, 5000)
}

for(var i=0;i<3;i++){
  setTimeout(function(){
    console.log(saludo)
  }, 5000)

}














.
