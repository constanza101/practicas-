var libros = ['In Search of Lost Time  by Marcel Proust','Don Quixote by Miguel de Cervantes','Ulysses by James Joyce','The Great Gatsby  by F. Scott Fitzgerald','Moby Dick by Herman Melville','Hamlet by William Shakespeare','War and Peace by Leo Tolstoy','The Odyssey by Homer','One Hundred Years of Solitude  by Gabriel Garcia Marquez ','The Divine Comedy  by Dante Alighieri ','The Brothers Karamazov  by Fyodor Dostoyevsky','Madame Bovary by Gustave Flaubert','The Adventures of Huckleberry Finn by Mark Twain','The Iliad by Homer','Lolita  by Vladimir Nabokov','Crime and Punishment  by Fyodor Dostoyevsky','Alices Adventures in Wonderland  by Lewis Carroll','Wuthering Heights by Emily Brontë','Pride and Prejudice by Jane Austen','The Catcher in the Rye by J. D. Salinger','The Sound and the Fury by William Faulkner','To the Lighthouse  by Virginia Woolf ','Heart of Darkness by Joseph Conrad','Anna Karenina by Leo Tolstoy ','Nineteen Eighty Four by George Orwell','Great Expectations by Charles Dickens','Middlemarch by George Eliot','Gullivers Travels by Jonathan Swift ','Catch-22  by Joseph Heller','One Thousand and One Nights by India/Iran/Iraq/Egypt','The Grapes of Wrath  by John Steinbeck','The Stories of Anton Chekhov by Anton Chekhov','Absalom, Absalom! by William Faulkner','Jane Eyre by Charlotte Brontë','The Trial by Franz Kafka','Invisible Man  by Ralph Ellison','Mrs. Dalloway  by Virginia Woolf ','The Red and the Black by Stendhal','The Aeneid by Virgil','David Copperfield by Charles Dickens','Beloved by Toni Morrison','The Stranger  by Albert Camus','Leaves of Grass by Walt Whitman','To Kill a Mockingbird  by Harper Lee','A Portrait of the Artist as a Young Man  by James Joyce','The Sun Also Rises  by Ernest Hemingway','Collected Fiction by Jorge Luis Borges','Oedipus the King by Sophocles','Candide by Voltaire','The Canterbury Tales by Geoffrey Chaucer'];

libros.indexOf('Middlemarch by George Eliot')

var eliot = libros.indexOf('Middlemarch by George Eliot')


COMPROBAR SI EXISTE UN LIBRO EN LA LISTA
libros.indexOf('Moby Dick')
/ASI NO)

CREAR UN ARRAY CON LOS LIBROS EN INDICES PARES Y OTRO CON LOS IMPARES.


var pares = []

libros.forEach(
  function(hola){
    if(libros.indexOf(hola)%2 == 0){
      pares.push(hola)
    }
  }
)

libros.concat(pares)





LA ADIVINA

función tellfortune que tomará 4 argumentos:
numero de hijos
nombre de la pareja
localizacion geográfica
titulo del trabajo.

imprimirá en la pantalla tu fortuna al estilo de
"tú estarás en CIUDAD trabajando de TRABAJO y casada con PAREJA, tendrán NUMERO hijos"



function tellfortune (hijos, pareja, ciudad, trabajo){
  console.log("tú estarás en", ciudad ," trabajando de", trabajo , "y casada con", pareja, ", tendrán", hijos, " hijos.")
}

var child = [1,2,3,4,5,9];
var husband = ["Pablo", "Pedro", "Jose", "Gabi", "nadie"];
var city = ["Barcelona", "Buenos Aires", "Paris", "Nueva York", "Amsterdam"];
var job = ["developer", "heladero", "camarero", "fontanero", "abogado"];



var pibe = child[Math.round(Math.random()*4)];
var marido = husband[Math.round(Math.random()*4)];
var lugar = city[Math.round(Math.random()*4)];
var trabajando = job[Math.round(Math.random()*4)];


tellfortune(pibe, marido, lugar, trabajando)











.
