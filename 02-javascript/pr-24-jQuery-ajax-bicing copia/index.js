var stationsList = [];
var favouriteStationsIds = [];

// Ahora creamos la función que agregará la lista
function showList(){


      $(".nearbyRow").remove();


  var filterByFavorites = false;
    if ($('#favourites').prop("checked")){
      filterByFavorites = true;
    }

  //bucle:itera sobre c/u de las estaciones
          for (i = 0; i < stationsList.length; i++) {


              var station = stationsList[i];
              var id = parseInt(station.id);
              var streetName = station.streetName;
              var streetNumber = station.streetNumber;
              var bikes = station.bikes;
              var slots = station.slots;
              var status = station.status;
              var nearbyStations = station.nearbyStations; //<--string de numeros

//si filterByFavorites = true (filtrar por favouritos )

              if (filterByFavorites) {
                if (favouriteStationsIds.indexOf(id) == -1) {

                 //si no existe - lo borramos.
                 $("#tr_" + id).remove();
                  //si no existe, no le hacemos append.
                    continue;

                }
              }


              //<comprobamos si el id no existe en nuestro html (su largo es = 0)
              if ($("#" + id).length == 0) {
                  var my_url = 'https://www.google.es/maps/place/' + streetName.replace(" ", "+") + '+' + streetNumber;

                  var star =   '<label stationId="'+id+'" for="checkbox'+id+
                  '" class="custom-checkbox labelCheck"><input type="checkbox" id="checkbox'+id+
                  '"/><i class="far fa-star"></i><i class="fas fa-star"></i></label>';

                  var nearBtn = '<a class="nearBtn" nearbyStations="'+nearbyStations+
                  '"><i class="fas fa-bicycle"></i></a>';

                // var nearby = <i class="fas fa-chevron-circle-down"></i>

  //si no existe, agregamos la estación a la lista (append)
                  $("tbody").append(
                    '<tr class="trow" id="tr_'+id+'" nearbyStations="'+nearbyStations+'"><th scope="row">' + id +
                    '</th><td class="px-1"><a target="_blank" href="'
                     + my_url + '">' + streetName + ', ' + streetNumber +
                     '</a></td><td class="px-1"><span id=' + id + '>' + bikes + '</span>/'
                     + slots + '</td><td class="px-1">' + status + '</td><td class="px-1">' + nearBtn
                      + '</td><td class="px-1">' + star + '</td></tr>');


/*
                      <label for="checkbox'+i+'" class="custom-checkbox">
                        <input type="checkbox" id="checkbox'+i+'"/>
                        <i class="glyphicon glyphicon-star-empty"></i>
                        <i class="glyphicon glyphicon-star"></i>
                      </label>

*/

  //si ya existe, pero el valor de bikes es !=, sobreescribimos este numero con .text()
              } else if (bikes != $("#" + id).text()) {
                  $("#" + id).text(bikes);
              }
  //Si ya existe y no hay cambios, no ocurre nada.
          }


//BINDS
    //al hacer click en el boton .nearBtn  llama a la F add, pasando esta fila como prámetro.
          $(".nearBtn").click(function(){

            // Funciona!
            addNearbyStations($(this).parent().closest('.trow'));

           }
          );



          $(".labelCheck").change(function(event){
                //Llamamos una F, y enviamos como parametro $(this), que es la estación en la que clickeamos.
              //  alert("gestionandoFavoritos"); //<--FUNCIONA? nos indica que se ejecutó el click event

                try {
                  manageFavourites($(this));
                } catch (e) {
                  alert(e);
                }
          }
          );

}

// FAVORITOS : CLICK: va a llamar a una función que gestiona favoritos.
function addFavourite(intFavStatIds){
  //ejecutar un POST para guardar el favorito en la base de datos - por ahora ficticio
  var data = { favouriteId: intFavStatIds, email: "a@a.com", password: "1234" };
  $.post( "https://reqres.in/api/register", data, function(response){
    //alert("guardado en la base de datos");
// al recibir la respuesta añadir el favorito a la variable global de favoritos
    favouriteStationsIds.push(intFavStatIds)
  });
}

function removeFavourite(intFavStatIds){
  //ejecutar un POST para guardar el favorito en la base de datos - por ahora ficticio
  var data = { favouriteId: intFavStatIds, email: "a@a.com", password: "1234" };
  $.post( "https://reqres.in/api/register", data, function(response){
    //alert("borrado de la base de datos");

    var index = favouriteStationsIds.indexOf(intFavStatIds);
    if (index > -1) {
      favouriteStationsIds.splice(index, 1);
    }
  });
}


//manageFavourites() va a hacer 2 cosas:
//1- añadir los ids de favoritos a favouriteStationsIds --> ajax post para la url (servidor) en la rta del post, vamos añadir al array
//2- eliminar los ids de favoritos a favouriteStationsIds -- ajax delete y eliminar del array
function manageFavourites(objetoOrigen){

  var stringFavStatIds = objetoOrigen.attr("stationId");
  var intFavStatIds = parseInt(stringFavStatIds);

  var myFavorites = false;
  if ($("#checkbox"+intFavStatIds).prop("checked")){
    myFavorites = true;
  }

  if (myFavorites){
    //alert("guardarFavorito");
    addFavourite(intFavStatIds);
  }
  else {
  //  alert("borrarFavorito");
    removeFavourite(intFavStatIds);
  }
}




//La primera utilidad es cargar toda la lista.
//la segunda utilidad es actualizar la cantidad de bicis disponibles.
function getApiStations() {
    var url = "http://18.224.2.117/"; //<-- API
    $.get(url, function(response) { //<-- hacemos GET a la API
      //response es: { stations:[ {}{}{}{} ]
//                     updateTime: 34353634563
    //               }

        stationsList = response.stations;
        showList();//< llamamos a la funcion que agregará la lista
    });

}


//esta F recibe una linea (del DOM) de la estación que seleccionamos
// y nos agrega (after) las estaciones cercanas debajo.
function addNearbyStations(objetoOrigen) {
  var stringNearStations = objetoOrigen.attr("nearbyStations");//<--string c/ los numeros de id de las estaciones cercanas.
  var arrStNearStations = stringNearStations.split(", ");//<--Convertido a array DE STRINGS
  var arrIntNearStations = [];

//Este FOR me convierte los "numeros-strings" a numeros INTEGERS.
//los guardo en un array (push)
    for (i = 0; i < arrStNearStations.length; i++){
      arrIntNearStations.push(parseInt(arrStNearStations[i]));
      //arrStNearStations[i] = parseInt(arrStNearStations[i]); // cambiando el elemento en el mismo array
    }

//A PARTIR DE LOS ID de las estaciones cercanas.
//OBTENEMOS UN ARRAY DE ESTACIONES CERCANAS.
    function getNearbyStations(nearbyIdList) {
      //variable array donde guardaré los obj, "estaciones cercanas"
        var nearStations = []
        //Bucle sobre la lista completa de ESTACIONES
        //
        for (i = 0; i < stationsList.length; i++) {
            var station = stationsList[i];
            var stationId = parseInt(station.id);
//Hacemos un IF saber si c/u de las estaciones de la lista larga
//existe en la lista de estaciones cercanas.
            if (nearbyIdList.indexOf(stationId) != -1) {
              //si existe, las enviamos a un array.
                nearStations.push(station);
            }
        }
        return nearStations;
    }//

    var nearbyObjList = getNearbyStations(arrIntNearStations);
    //$(selector de la estacion tocada).append(estacionEntera)

//al buscar las cercanas de una estacion, borramos las cercanas de otra que
//habíamos consultado antes:
    $(".nearbyRow").remove();

//hacemos un bucle que nos agrega debajo(after)las lineas de las estaciones cercanas a la que seleccionamos (click)
    for (i = 0; i < nearbyObjList.length; i++) {
        var station = nearbyObjList[i];
        var id = station.id;
        var streetName = station.streetName;
        var streetNumber = station.streetNumber;
        var bikes = station.bikes;
        var slots = station.slots;
        var status = station.status;
        var nearbyStations = station.nearbyStations; //<--string de numeros

        var my_url = 'https://www.google.es/maps/place/' + streetName.replace(" ", "+") + '+' + streetNumber;

        var star =   '<label stationId="'+id+'" for="checkbox'+id+
        '" class="custom-checkbox labelCheck"><input type="checkbox" id="checkbox'+id+
        '"/><i class="far fa-star"></i><i class="fas fa-star"></i></label>';

        var nearBtn = '<a class="nearBtn" nearbyStations="'+nearbyStations+
        '"><i class="far fa-star"></i></a>';



        $(objetoOrigen).after('<tr class="trow table-dark nearbyRow" id="tr_'+id+'" nearbyStations="'+nearbyStations+'"><th scope="row">' + id +
            '</th><td><a target="_blank" href="' + my_url + '">' + streetName + ', ' + streetNumber + '</a></td><td><span id='
            + id + '>' + bikes + '</span>/' + slots + '</td><td>' + status + '</td><td>' + nearBtn
            + '</td><td>' + star + '</td></tr>');


    }
}

//Codigo para estaciones cercanas:
//nearbyList = [2, 4, 6]



function changeTheme() {
    $("table").addClass("table-dark")
}

$('#favourites').change(function () {
  showList();
}); //<----onChange end

//setInterval(update, 5000);
getApiStations();
