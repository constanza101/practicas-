var fs = require ("fs");
var colors = require ("colors");
var archivoarg = process.argv[3];
var taskToWrite = { "2." : "leer tarea"}

var tasks = [];

function readTaskFile(archivo){
  /*
    fs.readFile(archivo, readCallback);

    function readCallback(error, respuesta){
      tasks = JSON.parse(respuesta);


      console.log(tasks);
    }
    */

    // Lectura sincrona de archivo
    var contenidoArchivo = fs.readFileSync(archivo, 'utf8');
    tasks = JSON.parse(contenidoArchivo);

}


// Ahora añadiremos una función “readTaskFile()” a nuestro archivo JS.
//Esta función leerá el archivo json que acabamos de crear,
//e imprimirá las tareas en la terminal.



function addTask(archivo, nombreTask){
  tasks.tasks.push({"2":nombreTask});
  var tasksJSON = JSON.stringify(tasks)
  console.log(tasksJSON);

  fs.writeFile(archivo, tasksJSON, callbackWrite);

  function callbackWrite(error){
    if (error){console.log(error.red);}
    console.log("tarea añadida");
  }

}



if (process.argv[2] == "--show"){
  readTaskFile(archivoarg);
  console.log(tasks);
}

if (process.argv[2] == "--add"){
  readTaskFile(archivoarg);
  addTask(archivoarg, process.argv[4])
}


  fs.writeFile("prueba.csv", "TAREA;ID;FECHA", callbackWrite);

  function callbackWrite(error){
    if (error){console.log(error.red);}
    console.log("TEST");
  }
