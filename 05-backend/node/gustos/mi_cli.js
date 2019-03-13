var fs = require('fs');
var colors = require('colors');
var archivo = process.argv[3];
var obj = {"peli" : process.argv[4], "cancion" : process.argv[5]}


function read (){
    fs.readFile(archivo, callbackRead);
    function callbackRead(error, respuesta){
      var gustos = JSON.parse(respuesta);
      console.log(gustos);
    }
}

function write(){
    fs.writeFile(archivo, JSON.stringify(obj), callbackWrite)
    function callbackWrite(error){
      if (error){console.log(error.red);}
      console.log("Nuevo archivo creado");
    }
}

function extend(){
  fs.readFile(archivo, callbackRead);
  function callbackRead(error, respuesta){
    var gustos = JSON.parse(respuesta);
    gustos[process.argv[4]]= process.argv[5];

    fs.writeFile(archivo, JSON.stringify(gustos), callbackWrite)
    function callbackWrite(error){
      if (error){console.log(error.red);}
      console.log("archivo modificado");
    }
  }
}

console.log('\n====\n' +
'MARAVILLOSO CLI ESCRITO POR CONSTANZA\n'.green +
'====\n')

if (process.argv[2] == "--read"){
  read();
}
if (process.argv[2] == "--write"){
  write();
}

if (process.argv[2] == "--extend"){
  extend();
}
