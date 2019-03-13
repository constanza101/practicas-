var fs = require("fs");

//importar express
var express = require('express');

//creo mi servidor:
var app = express();

//configuro el server para que parsee el body de las peticiones post
app.use(express.json())
app.use(express.urlencoded())

app.get("/hello", function(req, res){

  console.log("alguien está saludando");
  return res.send("hola!")
})

app.get("/hello/:NombrePersona", function(req, res){
  return res.send("Hola "+ req.params.NombrePersona);
})

app.get("/gustos/:NombrePersona", function(req, res){
  fs.readFile("datos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
    var gustosRta = gustos[(req.params.NombrePersona).toLowerCase()];
    return res.send(gustosRta);
  })
})

app.get("/gustos", function(req, res){
  fs.readFile("datos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
    return res.send(gustos);
  })
})


app.delete("/gustos/:NombrePersona", function(req, res){
  fs.readFile("datos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
    delete gustos[(req.params.NombrePersona).toLowerCase()]
    fs.writeFile("datos.json", JSON.stringify(gustos), function(){
      return res.send('Todo ok. Persona borrada!')
    })
  })
})

app.post("/gustos/:NombrePersona", function(req, res){
  fs.readFile("datos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
    if(gustos[req.params.NombrePersona] == undefined){
      gustos[req.params.NombrePersona] = req.body;
      fs.writeFile("datos.json", JSON.stringify(gustos), function(){
        return res.send("ya se ha agregado")
      })
    }
    else {
      return res.send("ya existe ese dato. Para actualizar un dato ya existente, usa un PUT")
    }
  })
})

app.put("/gustos/:NombrePersona", function(req, res){
  fs.readFile("datos.json", function(error, respuesta){
    var gustos  = JSON.parse(respuesta);
  //  gustos[req.params.NombrePersona] = req.body;
    if(gustos[req.params.NombrePersona] != undefined){
      gustos[req.params.NombrePersona] = req.body;
      fs.writeFile("datos.json", JSON.stringify(gustos), function(){
        return res.send("ya se ha agregado")
      })
    }
    else {
      return res.send("ese ítem no existe. Para crear uno nuevo, usa un POST")
    }
  })
})

app.listen(8000, function(){
  console.log("escuchando el puerto 8000");
})
