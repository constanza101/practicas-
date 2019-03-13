


/*
LA ADIVINA
función tellfortune que tomará 4 argumentos:
numero de hijos
nombre de la pareja
localizacion geográfica
titulo del trabajo.

imprimirá en la pantalla tu fortuna al estilo de
"tú estarás en CIUDAD trabajando de TRABAJO y casada con PAREJA, tendrán NUMERO hijos"

*/

//primero hago una función que  me retorna el resultado final:
//como mezcla Strings con variables, return no puede retornar más de una cosa.
//entonces creamos una variable con el resultado, concatenando con + todas las partes
//Y luego un return de esa variable:
function tellfortune(hijos, pareja, ciudad, trabajo){
  var string = "Estaras en "+ ciudad +" trabajando de "+ trabajo + " y casad@ con "+ pareja+", tendras "+ hijos+ " hijos.";
  return string;
}


//Declaro variables con las opciones para cada parámetro.
//Cada variable será un string.
var child = [4,2,3,9];
var husband = ["tu vecino", "tu mejor amigo", "tu primer amor", "nadie", "un compañero de trabajo", "alguien que conociste en Tinder"];
var city = ["Barcelona", "Buenos Aires", "Paris", "Nueva York", "Sydney", "Dubai", "Rio de Janeiro", "Lisboa", "Nueva York", "Vancouver"];
var job = ["programador", "UX UI designer", "heladero", "camarero", "fontanero", "abogado", "carpintero", "artista", "bailarin", "musico"];


//Hago una nueva función, que será la llamada por el botón en la web.
//Dentro de esta función, declaro nuevas variables
//que serán una para cada parámetro, esto es para poder ir cambiando
//el valor del índice cada vez que ejecutamos la función.
//Para eso usamos el nombre del array (child) y para cambiar el
//número del índice aleatoriamente, ponermos un Math.random()
//que nos dará un número random entre 0 y 1.
//para que nos de enteros lo ponemos en un Math.round()
//y para que nos de un numero maximod e 4, lomultiplicamos *4.


function myfortuna(){
  var pibe = child[Math.round(Math.random()*3)];
  var marido = husband[Math.round(Math.random()*5)];
  var lugar = city[Math.round(Math.random()*9)];
  var trabajando = job[Math.round(Math.random()*10)];

  //luego queremos llamar a la función inicial tellfortune
  //pero inyectando los parámetros random obtenidos en  las anteriores variables.
  //Creamos una variable para esta función para inyectarla dentro de nuestro
  // html, precisamente dentro de nuestra etiqueta <h1>.
  //usamos document.querySelector("h1") para encontrar el h1 en el HTML.
  //usamos.innerHTML para insertar la variable fortuna en el h1:

  var fortuna = tellfortune(pibe, marido, lugar, trabajando);


  
//  $(".imagen").html('<img class="preparados"src="images/thinking01.gif"');
  setTimeout(function(){$("h2").html(fortuna)}, 3000);
  //document.querySelector("h2").innerHTML = fortuna
}
