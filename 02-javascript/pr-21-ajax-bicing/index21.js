
/*
En nuestro index.js haremos una llamada GET al la API
pública del ayuntamiento de Barcelona sobre el estado de
los parkings de bicings: http://wservice.viabicing.cat/v2/stations

Cuando obtengamos la respuesta, inyectaremos los datos en
nuestra página html. Cada estación de bicing será una fila de nuestra tabla.
Como son muchas estaciones de bicing, quizás quieras hacer esto último
usando un bucle!

El resultado: una visualización en tiempo real del status de los parkings
 de bicicletas de Barcelona. Abre la página con Chrome y refréscala varias
 veces. Podrás ver que los datos cambian en tiempo real!

*/


function bicingStatus(metodo, url){
  var requester = new XMLHttpRequest();
  requester.open(metodo, url);
  requester.onreadystatechange = function(){
        if(requester.status == 200 && requester.response != "") {

          var stations = JSON.parse(requester.response).stations
            for (i=0; i<stations.length;i++){
              var station = stations[i]
              var id = station.id
              var streetName = station.streetName
              var streetNumber = station.streetNumber
              var bikes = station.bikes
              var slots = station.slots
              var status = station.status

              document.querySelector("tbody").innerHTML =document.querySelector("tbody").innerHTML +
              '<tr><th scope="row">'+id+'</th><td>'+streetName +', '+streetNumber+'</td><td>'+bikes+'/'+slots+'</td><td>'+status+'</td></tr>'
            }
        }
      }
requester.send();
};

function update(){
    document.querySelector("tbody").innerHTML = "";
    bicingStatus("GET", "http://wservice.viabicing.cat/v2/stations");
}


/*
function RespondeStatus(metodo, url, statusCorrecto, data){
      try{

        if (metodo == "POST" && data == undefined){
          throw ("falta enviar datos para el POST");
        }

        var requester = new XMLHttpRequest();
        requester.open(metodo, url)
        requester.onreadystatechange = function(){

          try {
            if(requester.status == statusCorrecto && requester.response != "") {
              console.log("status correcto: "+requester.status);
              var json1 = JSON.parse(requester.response);
              var json2 = json1.data[0];
              console.log(json2.avatar);
            }
            else if (requester.status != statusCorrecto){ console.log("status incorrecto "+ requester.status);}
          }
          catch(e){
            alert("error ajax: " + e);
            console.log(e)
          }

        }

        requester.send(data)
      }
      catch(e){
        alert("error " + e);
        console.log(e)
      }
}

//(RespondeStatus("GET", "https://reqres.in/api/users?page=2", 200)

// RespondeStatus("DELETE", "https://reqres.in/api/users/2", "204")

var objEnvio = { email:"sydney@fife.com", password: "asdasd" };

var jsonEnvio = JSON.stringify(objEnvio);

alert(jsonEnvio);

RespondeStatus("POST", "https://reqres.in/api/register", 201, jsonEnvio)
*/
