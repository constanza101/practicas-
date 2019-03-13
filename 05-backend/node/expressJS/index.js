var express = require("express");
var colors = require("colors");

var app = express()

app.get('/', function(request, response){
  console.log('Alguien hizo una petición GET al path /');
  return response.send('Bienvenida!')
  }
)

app.get('/product/:productID', function(request, response){
  console.log('Alguien hizo una petición GET al path /hello');
  return response.send('Hola ' + request.params.NombrePersona)
  }
)

/*
app.listen(8000, callback)
function callback(){
  console.log('Server is listening in port 8000')
}
*/
//A listen se le pasa como parametro el puerto y un callback
//el callback se puede poner como una función anónima así:
app.listen(8000, function(){
  console.log('Server is listening in port 8000')
})
