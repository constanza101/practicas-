//IMPORTAR LIBRERIAS
var fs = require ("fs");
var colors = require ("colors");


//DECLARAR FUNCIONES

function readTareas(){
    fs.readFile("tareas.json", callbackRead)
    function callbackRead(error, res){
      console.log(JSON.parse(res));
    }
}

function escribirTarea(){
  fs.readFile("tareas.json", callbackRead);
  function callbackRead(error, res){
    var tareasObj = JSON.parse(res);
    tareasObj[process.argv[3]] = process.argv[4];
    fs.writeFile("tareas.json", JSON.stringify(tareasObj), callbackWrite);
    function callbackWrite(error){
      if (error){console.log(error);}
      console.log("Done!");
    }
  }
}

// EJECUTAR

if(process.argv[2] == "--read"){
  readTareas();
}

if(process.argv[2] == "--write"){
  escribirTarea();
}
