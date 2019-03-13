
function RespondeStatus(metodo, url, statusCorrecto, data){
      try{

        if (metodo == "POST" && data == undefined){
          throw ("falta enviar datos para el POST");
        }

        var requester = new XMLHttpRequest();
        requester.open(metodo, url);
        requester.onreadystatechange = function(){

          try {
            if(requester.status == statusCorrecto && requester.response != "") {
              console.log("status correcto: "+requester.status);
              var json1 = JSON.parse(requester.response);
              var json2 = json1.data[0];
              console.log(json2.avatar);
            }
            else if (requester.status != statusCorrecto){ console.log("status incorrecto "+ requester.status);}
            else if (requester.response == ""){console.log("respuesta vacía.")}
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
