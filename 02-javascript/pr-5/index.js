EJ 1:

Escribe una función llamada greaterNum que haga lo siguiente:
acepta 2 parámetros, ambos serán números.
si el primero es más grande que el segundo, retornará el mensaje "el primero siempre es el mejor".
si no lo es, retornará el mensaje, "el que ríe último, ríe mejor".

function greaterNum(num1, num2){
  if(num1 > num2){
    return "el primero siempre es el mejor"
  }
  else if (num1 < num2) {
    return "el que ríe último, ríe mejor"
  }
  return "peace"
}


EJ2:

Escribir una función "Traductor" que acepta un parámetro (será el código del lenguaje)
"es" para español.
"en" para inglés.
"de" para alemán.
"ja" para japonés.
en función del códgo de lenguaje que tenga, retornará "hola mundo!" en el lenguaje correspondiente.


function traductor(lang){
  if (lang == "es"){
    return "hola mundo!"
  }
  else if (lang == "en") {
    return "hello world!"
  }
  else if (lang == "de") {
    return "hallo munden"
  }
  else if (lang == "ja") {
   return "ohio muldo"
  }
  else{
  return "language undefined"
  }
}




FOR / WHILE

EJ1:

escribe un array que conendrá todos los posibles valores de la función traductor.
hacer un bucle, que recorrerá los valores desde 0 hasta el límite del array,
en cada iteracción llamará a la función traductor.

languages = ["es", "en", "de", "ja"];
for(i=0; i<languages.length; i++){
    setTimeout(traductor(languages[i], 3000)
}



setTimeout()
es una función global, del objeto window.
toma 2 argumentos:
el arg1 es una funcion, el arg2, será un número que serán milisegundos.

Los parámetros de setTimeout solo pueden ser:
una función (o una funcíon anónima) y los milisegundos en que tardará en ejecutarse.
Para pasarle otra cosa al setTimeout, por ej, console.log(), lo que hacemos
es "wrapearlo" (envolverlo) en una función anónima.

En el ejemplo anterior, quiero imprimir el resultado de la función traductor:

languages = ["es", "en", "de", "ja"];
for(i=0; i<languages.length; i++){
    setTimeout(function(){
      console.log(traductor(languages[i]))
    }, 3000)
}

El bucle anterior nos da como resultado i=4 cuando se ejecuta el console.log luego de 3 segundos.

para obtener todos los resultados de i en cada iteracción, usaremos los CLOSURES.

languages = ["es", "en", "de", "ja"];
for(i=0; i<languages.length; i++){
  setTimeout(
    function(i){
      i2 = i;
      return function(){
        console.log(traductor(languages[i2]))
      }
    }(i), 3000
  );
};


(REVISAR MAÑANA PPORQUE EL PROFE ESTA ESPESO)



Set interval que improma la palabra "hola" cada 5 segundo
setInterval(funcion(), ms)
setInterval( function(){console.log("hola")} ,5000)

------------------

DOM

prmera función básica de javascript: manipular el DOM.

el DOM:
Document Object Model (documento de modelo de objetos)
es un convenio/modelo en el mundo de la we, sobre como se deben
esrtucturar los contenidos de una web.

El Javascript va a generar cambios en el DOM, que repercutirá en cambios en el html.

Para llegar a un nodo del DOM, podemos hacerlo de 2 maneras:
 - 1: utilizando los selectores (id o class)
 - 2: a través de la "ruta" desde html hasta su posición.

Selectores en JS son iguales que en CSS.
porque están todos basados en el DOM.

----- >>> FUNCIONES PARA SELECCIONAR NODOS DEL DOM:

>>>>>>>>>>>>>>>>>>>>>>document.getElementById()

Ejemplo:

document.getElementById("main") //<<--- main es el nombre del id.

para usar el elemento que estoy seleccionando, lo puedo "transformar" en una variable.
var x = document.getElementById("main")

luego para usarlo, solamente llamamos a la variable x.

console.log(x) //<--- nos imprime el elemento (nodo) main.




>>>>>>>>>>>>>>>>>>>>>>document.getElementsByClassName()
esta función me permite seleccionar uno o más elementos en base a su clase.

Me devuelve todos los elementos con esa clase, en una lista (array).
Por ejemplo:
document.getElementsByClassName("clase")
Clase[div.seccion1, div.seccion2, div.seccion3 ]
si quiero elegir la sección 2, que está en la posición 1:
document.getElementsByClassName("clase")[1]
o bien podríamos generar una variable a partir de
var y = document.getElementsByClassName("clase")
y luego usar y como el nombre del array, entonces
para seleccionar la posición 1:
y[1]


>>>>>>>>>>>>>>>>>>>>>>document.getElementsByName()
selecciona los elementos por su nombre. ("name" es una propiedad que se usa en los inputs)
por eso no es muy usado.




>>>>>>>>>>>>>>>>>>>>>>document.querySelector()
no lleva la palabra "get" porque lo que hace es: Lanza una consulta y espera una respuesta.
este método nos permite pasarle un selector completo (o lo que puedo llamar ruta)
o también los identificadores solos.

(si quiero seleccionar una clase, mejor sleccionar getElementsByClassName()para que nos de
los resultados en un array.)

var z = document.querySelector("#hplogo")

var j = document.querySelector("#uh-logo")

var k = document.querySelector("#yui_3_18_0_3_1548072579597_665 > div > ul > li > ul > li:nth-child(8) > a > span.C\28 \24 searchBlue\29 \3a h.Fw\28 b\29.Mstart\28 2px\29")



  COMO ALTERAR UN NODO DEL DOM MEDIANTE JS.

  1. Cambiar los atributos:

  element.setAttribute(attribute,value)

"element" representa nuestro nodo.

por ejemplo en google:

document.querySelector("#hplogo").setAttribute("width", 600)
o bien desde el nombre de la variable que le dimos:
z.setAttribute("width", 600)

tambien se lo puede llamar como un diccionario y cambiar/crear las claves y valores.
EJ

z.style.marginTop = "30px"; //<-- cambia o agrega un estilo margin-top a 30 px.
//NOTA: Style es un diccionario en si mismo.

z.width = "30px" //cambiar


var f = document.querySelector("#lga > div")


element.innerHTML = "string con los valores que quiero cambiar o crear en el contenido html"





var f = document.querySelector("#lga > div")


AGREGAR CONTENIDO HTML
f.innerHTML = f.innerHTML + "<span>HOLA</span>"
`<img height="92px" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="272px" id="hplogo" alt="Google" title="Google" onload="typeof google==='object'&amp;&amp;google.aft&amp;&amp;google.aft(this)"><span>HOLA</span>`
RECORDAR USAR COMILLAS QUE NO SE ENCUENTREN DENTRO DEL STRING:
``
""
''




REPASO:
- SELECIONAR UN NODO DEL DOM DE LAS DIFERENTES MANERAS.
      querySelector()
- ASIGNARSELO A UNA VARIABLE.

- CAMBIAR LOS atributos
      setAttribute()
      element.atributo = valor

- ELIMINAR ELEMENTOS
        innerHTML  ""

- INYECTAR NUEVOS ELEMENTOS
        elemento.innerHTML = elemento.innerHTML + "string con nuestro html"


 - AGREGAR UNA CLASE
  element.addClass("nombre")

- QUITAR UNA CLASE
element.removeClass("nombre")


XSS


>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<  PRACTICA DOM >>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<





Ejercicios:


Escribe la estructura HTML equivalente a los siguientes selectores:

#main-container > div:nth-child(2)
#es > div.main-content-wrapper > div.main-content > div.full-width > div > div:nth-child(2) > div.col-xxs-8 > div > div > div > h1
#es > div.main-content-wrapper > div.main-content > div.container > div:nth-child(2) > div > div > div > div > div > div > ul > li:nth-child(1) > span

Ejemplo:
Selector: div > h1
Código HTML equivalente;
<div>
    <h1></h1>
</div>



function red(){
  alert("ALERTA");
}

red();



























.
