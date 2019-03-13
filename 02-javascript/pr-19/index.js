
/*

//creamos el "requester"
var requester = new XMLHttpRequest();
//abrimos la conexión con el servidor, preparando el GET
requester.open("GET", "https://anapioficeandfire.com/api/characters/2")
//preparamos la función que se ejecutará al recibir la respuesta.
//en este caso una función anónima que imprimirá la respuesta (requester.response)
//PERO para que me lo imprima como un objeto, tengo que hacer el JSON.parse()
requester.onreadystatechange = function(){
  if(requester.status == 200 && requester.response != ""){
    console.log(JSON.parse(requester.response));
  }
}
//luego enviamos el mensaje (como es un GET, los parámetros van vacíos.)
requester.send()

*/

var requester = new XMLHttpRequest();
requester.open("GET", "https://anapioficeandfire.com/api/characters/2")
requester.onreadystatechange = function(){
  if(requester.status == 200 && requester.response != "") {
    var nombre = JSON.parse(requester.response)["name"];
    var temporadas = JSON.parse(requester.response)["tvSeries"];
    var tempString = temporadas.toString()

    document.querySelector("ul").innerHTML = "<li> nombre: "+nombre+ ", temporadas: "+tempString+"</li>"
  }
}
//luego enviamos el mensaje (como es un GET, los parámetros van vacíos.)
requester.send()









//
