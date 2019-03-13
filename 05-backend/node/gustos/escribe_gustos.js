var fs = require('fs');
var colors = require('colors');



var mis_datos = {"peli" : process.argv[3], "cancion" : process.argv[4]}
var fileName = process.argv[2];

fs.writeFile(fileName, JSON.stringify(mis_datos), callback)

function callback(error){
if (error){console.log(error)}
console.log("archivo nuevo creado!".green);
}
