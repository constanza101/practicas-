var fs = require("fs");
var colors = require('colors');

fs.readFile(process.argv[2], callback)

//quiero ver qué peli te gusta:
function callback(error, respuesta){
  var mis_gustos = JSON.parse(respuesta);
  var mi_peli = mis_gustos.peli;

  console.log(mi_peli.red);
}
