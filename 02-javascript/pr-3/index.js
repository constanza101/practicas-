//FUNCIONES

Ejemplo 1;

function ejemplo1(nombre,apellido){
  console.log("hola", nombre, apellido)
}

/*
copiado de la consola:
undefined
ejemplo1
ƒ ejemplo1(nombre,apellido){
  console.log("hola", nombre, apellido)
}
ejemplo1()
VM232:2 hola undefined undefined
undefined
ejemplo1("constanza", "diaz")
VM232:2 hola constanza diaz
*/

---------------
Parametrizar

Es eñ proceso de coger un trozp de código y sustituir los valores
fijos, por variables en una función.
-----------

Por ejemplo:

function generador_numeros(array_vacio, limite ){
    //aquí meto el codigo x ej una funcion,
    //donde reemplazaré los valores fijos,
    //en este caso el limite de generador_numeros
    //y el nombre del array vacio,
    //quedando así:
    for(i=0;i< limite; i++){
      array_vacio.push(i)
    }
}

//luego para llenar el array_vacio,
//(declararlo antes)
var my_array = []

// luego reemplazar las variables en la función (los argumentos)
//por los valores que quiero.
//estos argumentos se pueden cambiar cuantas veces queramos
//cada vez que llamemos a la funcion y agreguemos nuevos valores a los (argumentos).

Ej:

generador_numeros(my_array, 200)

//y luego si quiero generar un nuevo array, primero lo declaro vacío,
//y vuelvo a llamar a la funcion, cambiando el/los argumentos.

Ej:

var nuevo_array = []

generador_numeros(nuevo_array, 1000)


---------------

Ej2:
//vamos a crear una funcion que nos hará una suma de 2 numeros:

function suma(num1, num2){
  console.log(num1+num2)
}

//entonces para hacer la suma entre dos numeros deseados, hay
//que llamar a la funcion y reemplazar los argumentos
//por los numeros que quiero, asi:

suma(2,3)

//esto me imprimirá el resultado, que es 5.

Ej2, b ;
/*ahora podemos generar otro argumento que nos indique/varíe qué tipo de operación
queremos hacer, por ejemplo sumar o restar.
Vamos a agregar un argumento inicial que será un string de variable nombre: tipo_op
y será reemplazado por otro string, de acuerdo con la operación que queremos hacer.
será "suma" o "resta"

así;*/

function calculo(num1, num2, tipo_op){
    //y adentro ponemos un if else.
    if (tipo_op == "suma") {console.log(num1+num2)}
    else if(tipo_op == "resta"){console.log(num1-num2)}
}

// ahora agregamos más funciones:

function calculo(num1, num2, tipo_op){
    //y adentro ponemos un if else.
    if     (tipo_op == "suma")    {console.log(num1+num2)}
    else if(tipo_op == "resta")   {console.log(num1-num2)}
    else if(tipo_op == "multiplicar"){console.log(num1*num2)}
    else if(tipo_op == "dividir")  {console.log(num1/num2)}
    else if(tipo_op == "modulo")   {console.log(num1%num2)}
}



TIPOS DE DATOS QUE PUEDEN TENER LOS ARGUMENTOS DE UNA FUNCION
/*
numeros
palabras (string)
booleano
array
diccionario (objeto)
variable
otra funcion
*/

EJEMPLO UNA FUNCION DENTRO DE OTRA:

function say_hello(){console.log("hola")}

function ejecuta_funciones(nombre_function){nombre_function()}

ejecuta_funciones(say_hello())

Al final imprimirá "hola"

Para funciones con muchos argumentos, recordar los "named params"

Cuando tenemos una funcion que recibe muchoso argumentos, se hace dificil
darnos cuenta a qué se refiere cada uno de ellos, por eso es mejor
hacer una variable diccionario, por ejemplo:

function contactar (calle,numero,contactar){
  console.log(calle,numero,contactar)
}

function contactar (valores){
  console.log(valores["calle"],valores["numero"],valores["contactar"])
}

var parametros = {"calle":"tramontana", "numero": 64, "contactar":true}

contactar({"calle":"tramontana", "numero": 64, "contactar":true})

var parametros2 = {"calle":"tramontana", "numero": 64, "contactar":true}

contactar(parametros2)


----------------

RETURN

el return nos servirá para obtener un resultado que podremos usar como resultado
de una variable.
Esto nos puede servir para introducirlo en otra funcion (o cualquier otro codigo)

EJ

function suma (num1, num2){
  return num1+num2
}

/*
suma(2,3)
5
var resultado = (suma)
undefined
var resultado = suma(5,6)
undefined
resultado
11
*/

function calculo(num1, num2, tipo_op){
    //y adentro ponemos un if else.
    if     (tipo_op == "suma")    {return num1+num2}
    else if(tipo_op == "resta")   {return num1-num2}
    else if(tipo_op == "multiplicar"){return num1*num2}
    else if(tipo_op == "dividir")  {return num1/num2}
    else if(tipo_op == "modulo")   {return num1%num2}
}


------ EJEMPLO CODEWARS
 var birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

 var lista_completa=[]

    // return an array containing all of the strings in the input array except those that match strings in geese
      for(i=0; i < birds.length; i++){
        if(geese.includes(birds[i])){}
        else{
          if (lista_completa.includes(birds[i])){}
          else {lista_completa.push(birds[i])}
        }
      }
  return lista_completa
};

---

birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]



function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

 var lista_completa=[]

    // return an array containing all of the strings in the input array except those that match strings in geese
      for(i=0; i < birds.length; i++){
        if(geese.includes(birds[i])){}
        else{
          lista_completa.push(birds[i])
        }
      }
  return lista_completa
};



------------------
---------------------
---------------;

SCOPE / CONTEXTO

SE REFIERE A LA VISIBILIDAD DE LAS VARIABLES.

EJ
var hey = 1;

function adios(){
  var hou = 2  //<--- esta variable solo funcionará dentro de la funcion.
}



DECLARACION DE VARIABLES EN JAVASCRIPT
- var
- const LA VARIABLE CONST ES UNA VARIABLE QUE NO CAMBIA!!!!!
- let

//SE DECLARA ASÍ:

const nombre = valor

-------


FUNCIONES  (FUNCIONES QUE NO TIENEN NOMBRE xD)
una función con nombre, se declara y luego se llama para ser ejecutada.
En cambio una función anónima, se ejecuta directamente, no es declarada.
nomalmente se usan cuando son cortas y no se piensan reutilizar.

(function(){
  console.log(asd);
})();

Los paréntesis que lo rodean y los del final, no siempre se usan, son
una nueva sintaxis.



setTimeout()
es una función global, del objeto window.
toma 2 argumentos:
el arg1 es una funcion, el arg2, será un número que serán milisegundos.



------------


PRUEBA DE GOOGLE Y AMAZON:



-----------

PRACTICA:

1.
Crear una funcion que devuelva una division de un numero por 100.

function division(numero){
  return numero / 100;
}

2. crear una función que recibe un array y una string, y  devuelve la
posición de donde está esta string en el array.


var array1 = ["chau", "hola", "quehace"];

function indice(array, string){
  for(i=0; i<array.length; i++){
    if(array[i] == string){
      return i;
    }
  }
}

var ret = indice(array1, "hola");
console.log(ret);
1


var ret = indice(array1, "chau");
console.log(ret);
0

------------

var array1 = ["chau", "hola", "quehace"];

function indice(array, string){
  for(i=0; i<array.length; i++){
    if(array[i] == string){
    return i;
    }
  }
}


// indice
// string: recibe una palabra o frase
// letra recibe un string que pueda estar dentro del anterior "string".

function indice(string, letra){
  var indice = string.indexOf(letra);

  if(indice == -1){
    alert("letra no encontada");
  }

  return indice;
}


4 -
CREAR UN ARCHIVO JS EN MI PORTFOLIO
IMPORTAR EN MI PROJECTO EN EL HTML
HACER EN EL, UNA FUNCION LLAMADA validateForm()






6-
  CREAR UNA FUNCION QUE RECIBE UN ARRAY DE TRES NUMEROS Y DEVUELVE
  TRUE SI EL PRIMERO ES IGUAL AL SEGUNDO, O SI EL SEGUNDO ES IGUAL
  AL TERCERO.
  SI EL SEGUNDO NUMERO ES 4, SIEMPRE DEVUELVE FALSE.


--------------

function num(arraydetresnum){
  if(arraydetresnum[0] == arraydetresnum[1]){
    return true;
  }
  if(arraydetresnum[1] == arraydetresnum[2]){
    return true;
  }
  if(arraydetresnum[1] == 4){
    return false;
  }
}
