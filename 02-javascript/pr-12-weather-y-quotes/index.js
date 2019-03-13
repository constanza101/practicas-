//crear una página que dirá el tiempo.

//creamos una variable array con todos los resultados posibles
var tiempo = ["estará soleado", "va a llover, lleva paraguas",
"no uses paraguas, habrá mucho viento", "no salgas, hay nieve",
"hoy van a caer ranas de punta", "hoy se caerá la luna",
"un junete negro cabalgará sobre el cielo"]


//creamos la función que nos retornará el resultado de tiempo[i] en valores rabdom para i
function tellsWeather(weather){
//console.log(tiempo[Math.round(Math.random()*6)])--> no dará los valores de los indices dentro del array, es lo que queremos inyectar en el h2
//ahora con ese resultado, en vez de console log, le digo donde quiero ver el resultado con querySelector().innerHTMLt
  document.querySelector("h2").innerHTML = tiempo[Math.round(Math.random()*6)]
}

/*
Crearemos una función que nos dará consejos vitales. La función se llamará “cita()” e imprimirá en la consola una cita célebre al azar de entre el siguiente listado:
https://pastebin.com/raw/MLxjKtXG
(consejo: mira cómo hicimos esta mañana la función de decir el tiempo)
*/

var quotes = ["Es mejor morir de pie que vivir arrodillado - Dolores Ibarruri","Ninguna persona merece tus lágrimas, y quien se las merezca no te hará llorar - Gabriel García Márquez).", "De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir - John Steinbeck.", "El dinero no puede comprar la vida - Bob Marley.", "El mundo es bello, pero tiene un defecto llamado hombre - Friedrich Nietzsche","Lo que no te mata, te hace más fuerte - Friedrich Nietzsche.","Hace falta toda una vida para aprender a vivir Séneca.","Haz el amor y no la guerra - John Lennon.","La Educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él en el día de hoy - Malcolm X.", "Pienso y luego existo René Descartes.",
"De humanos es errar y de necios permanecer en el error - Marco Tulio Cicerón.","Solo sé que no sé nada Sócrates.","La verdadera sabiduría está en reconocer la propia ignorancia Sócrates.","El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice Aristóteles.", "Los amigos se convierten con frecuencia en ladrones de nuestro tiempo Platón.","La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco - Platón.", "Dos cosas son infinitas: la estupidez humana y el universo; y no estoy seguro de lo segundo Einstein.","No permitas que ningún ser humano te haga caer tan bajo como para odiarle Martin Luther King.","Es mejor permanecer callado y parecer tonto que hablar y despejar las dudas definitivamente Groucho Marx.","Estos son mis principios y si no te gustan, tengo otros Gorucho Marx.", "La política es el arte de buscar problemas, encontrarlos, realizar un diagnóstico falso y aplicar después remedios equivocados Groucho Marx.", "Los verdaderos líderes deben estar dispuestos a sacrificarlo todo por la libertad de su pueblo-Nelson Mandela.","Me gustan los amigos que tienen pensamientos independientes, porque suelen hacerte ver los problemas desde todos los ángulos Nelson Mandela.", "Podrán cortar todas las flores, pero no podrán detener la primavera- Pablo Neruda.", "Es tan corto el amor y tan largo el olvido Pablo Neruda.","Uno llega a ser grande por lo que lee y no por lo que escribe Borges.","Uno es dueño de lo que calla y esclavo de lo que habla Sigmund Freud.","Aquel que más posee, más miedo tiene de perderlo Leonardo Da Vinci.", "La inspiración existe, pero tiene que encontrarte trabajando Picasso", "Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle- Stephen Hawking.", "Ojo por ojo y el mundo acabará ciego - Mahatma Gandhi.","Vive como si fueras a morir mañana; aprende como si el mundo fuera a durar para siempre - Mahatma Gandhi.","Si quieres cambiar al mundo, cámbiate a ti mismo - Mahatma Gandhi.","Nunca rompas el silencio si no es para mejorarlo Beethoven.","Puedes engañar a todo el mundo algún tiempo. Puedes engañar a algunos todo el tiempo. Pero no puedes engañar a todo el mundo todo el tiempo Abraham Lincoln.","El éxito tiene muchos padres, pero el fracaso es huérfano - John Fitzgerald Kennedy","La mejor manera de librarse de la tentación es caer en ella Oscar Wilde.","La duda es la madre de la invención Galileo Galilei.","El único hombre que no se equivoca es el que nunca hace nada Goethe.","Vale más hacer y arrepentirse, que no hacer y arrepentirse Maquiavelo.","No estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas Copérnico.","Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse - Charles Baudelaire."]


function randomQuote(cita){
  var q = quotes[Math.round(Math.random()*41)]
  document.querySelector("h3").innerHTML = q
}
