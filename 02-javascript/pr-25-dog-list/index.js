//
function getAllBreeds() {
    var breedList = "https://dog.ceo/api/breeds/list/all"
    //obtenemos (GET) la API (Lista completa):
    $.get(breedList, function(response) {

        //guardamos en una variable las claves del objeto obtenido.
        //razasObj será el objeto completo (valor de la clave message).
        var razasObj = response.message;
        var razasArrDeClaves = Object.keys(razasObj);
        //razas será un array que contiene todas las claves del objeto razasObj.
        var razasCompleta = [];

        // iteraremos sobre el array de claves:
        //si esas claves NO tienen valor, entonces
        // las enviaremos así como están (haciendo un push) a un nuevo array razasCompleta.
        for (var i = 0; i < razasArrDeClaves.length; i++) {

            var raza = razasArrDeClaves[i];
            var subrazaArray = razasObj[raza];

//console.log(subrazaArray, subrazaArray == []);
            if (subrazaArray.length == 0) {
                razasCompleta.push(raza);
            }
            //si esas claves tienen un valor, será un array, entonces iteraremos sobre este
            //array, y luego haremos push de la clave más el valor en cada vuelta.
            else {

                for (var j = 0; j < subrazaArray.length; j++) {
                    var subraza = subrazaArray[j];
                    razasCompleta.push(raza +" "+ subraza);
                }
            }
        }
        //return razasCompleta;
        createDropDown(razasCompleta);

    })
}
getAllBreeds();

function createDropDown(arraydeRazas){
  for (var i = 0; i < arraydeRazas.length; i++){
      $(".breeds-drop-down").append('<a id='+arraydeRazas[i]+' class="dropdown-item" href="#">'+arraydeRazas[i]+'</a>');
      $("#"+arraydeRazas[i]).click(getImage);
  }
}

function getImage(event){
  textoRaza = event.target.innerText;
  //console.log("https://dog.ceo/api/breed/affenpinscher/images/random");

  $.get("https://dog.ceo/api/breed/"+textoRaza+"/images/random", function(response){
    imgUrl = response.message
    console.log(imgUrl);
    $(".dogImg").attr("src", imgUrl);

  })
}
