var fs = require('fs');

fs.readFile('biciDatos.json', callback);

function callback (error, res){
  var mis_datos = JSON.parse(res)
  var mis_estaciones = mis_datos.stations;
  for (i=0; i<mis_estaciones.length; i++){
   console.log(mis_estaciones[i].bikes);
  }
}
