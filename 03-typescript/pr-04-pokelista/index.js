function printList() {
    for (var i = 0; i < pokelista.length; i++) {
        var pokemon = pokelista[i];
        var nombre = pokemon.name;
        var url = pokemon.url;
        var id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        console.log(id);
        $("#tabla").append('<tr><th scope="row">' + id + '</th><td>' + nombre + '</td><td>' + url + '</td></tr>');
    }
}
function getAllApi(apiUrl1, controlParam) {
    $.get(apiUrl1, function (response) {
        var apiUrlNext = response.next; //<--URL siguiente
        var arrDeObj = response.results; //<--array de objetos [{},{}]
        //  var objeto = arrDeObj[i]; //<-- un objeto del array
        // var nombre = objeto.name; //<--valor de nombre
        //  var habliliadesEndpoint = objeto.url; //<es otro endpoint donde hay mas info.
        pokelista = pokelista.concat(arrDeObj);
        if (apiUrlNext != null && controlParam < 5) {
            getAllApi(apiUrlNext, controlParam + 1);
        }
        else {
            //console.log(pokelista);
            printList();
        }
    });
}
var pokelista = [];
getAllApi("https://pokeapi.co/api/v2/pokemon", 0);
//*********
/*

var pokelista = []

function getAllApi(apiUrl1:string, controlParam:number) {

    $.get(apiUrl1, function(response){
      var apiUrlNext = response.next;//<--URL siguiente
      var arrDeObj= response.results; //<--array de objetos [{},{}]
    //  var objeto = arrDeObj[i]; //<-- un objeto del array
    // var nombre = objeto.name; //<--valor de nombre
    //  var habliliadesEndpoint = objeto.url; //<es otro endpoint donde hay mas info.

      pokelista = pokelista.concat(arrDeObj);

      if(apiUrlNext != null && controlParam < 5){
        getAllApi(apiUrlNext, controlParam+1);
      }
    });
}

getAllApi("https://pokeapi.co/api/v2/pokemon", 0);
console.log(pokelista);

*/
