
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


              //<comprobamos si el id no existe(su largo es = 0)
              if ($("#"+id).length==0){
                var my_url = 'https://www.google.es/maps/place/'+streetName.replace(" ","+")+'+'+streetNumber;
                $("tbody").append('<tr><th scope="row">'+id+
                '</th><td><a target="_blank" href="'+my_url+'">'+streetName +', '+streetNumber+'</a></td><td><span id='+id+'>'+bikes+'</span>/'+slots+'</td><td>'+status+'</td></tr>');
              }
              else if(bikes != $("#"+id).text()){
                $("#"+id).text(bikes);
              }
            }
        }
      }
requester.send();
}

function update(){
    console.log("Actualizando");
    //$("tbody").empty()
    //document.querySelector("tbody").innerHTML = "";
    bicingStatus("GET", "http://wservice.viabicing.cat/v2/stations");
}

function changeTheme(){
  $("table").addClass("table-dark")
}

//Codigo para estaciones cercanas:
function getNearbyStations(nearbyList){
    var nearReturn = []
    for(i=0; i<stationsList.length; i++){
        var station = stationsList[i];
        var stationId = parseInt(station.id);

        if (nearbyList.indexOf(stationId) != -1){
          nearReturn.push(station);
        }
    }
 return nearReturn;
}
//getNearbyStations([2, 5, 7]);
update();
setInterval(update, 5000);
