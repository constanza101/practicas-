
var stationsList = [];

function bicingStatus(metodo, url){
  var requester = new XMLHttpRequest();
  requester.open(metodo, url);
  requester.onreadystatechange = function(){
        if(requester.status == 200 && requester.response != "") {

          var stations = JSON.parse(requester.response).stations;

          stationsList = stations;


            for (i=0; i<stations.length;i++){
              var station = stations[i];
              var id = station.id;
              var streetName = station.streetName;
              var streetNumber = station.streetNumber;
              var bikes = station.bikes;
              var slots = station.slots;
              var status = station.status;

              $("tbody").append('<tr><th scope="row">'+id+'</th><td>'+streetName +', '+streetNumber+'</td><td>'+bikes+'/'+slots+'</td><td>'+status+'</td></tr>')
              //document.querySelector("tbody").innerHTML =document.querySelector("tbody").innerHTML +
              //'<tr><th scope="row">'+id+'</th><td>'+streetName +', '+streetNumber+'</td><td>'+bikes+'/'+slots+'</td><td>'+status+'</td></tr>'
            }
        }
      }
requester.send();
};

function update(){
    $("tbody").empty()
    //document.querySelector("tbody").innerHTML = "";
    bicingStatus("GET", "http://wservice.viabicing.cat/v2/stations");
}

function changeTheme(){
  $("table").addClass("table-dark")
}

//Codigo para estaciones cercanas:
function getNearbyStations(nearbyList){
    //creo un array vacío para luego hacer push de los objetos(info completa de las estaciones cercanas.)
    var nearReturn = []

//Creo un bucle for, que pase por todos los valores de la lista principal (sationList)
    for(i=0; i<stationsList.length; i++){
    //para cada objeto en cada indice del array station list,
    //quiero averiguar si el id coincide con el valor de
    //mi array en nearbyList.
    //
    //o sea, quiero  llegar al valor de mi id:
        //---- primero encuentro cada una de las estaciones:
        var station = station[i];
        //--- luego encuentro el id de esa estación:
        var stationId = station.id;
        // o sea que stationId será un número que tengo que comparar con el
        //los valores dentro de mi arrat nearbyList[i]
        //
        //usando indexOf(numero que no existe) = -1 podemos decir que:
        if (nearbyList.indexOf(stationId) !== -1){
          console.log(station);
        }
    }

 return nearReturn = [{},{},{}];
}

getNearbyStations([2, 5, 7])
