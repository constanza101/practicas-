var fs = require ("fs");
var colors = require ("colors");
var express = require('express');
var mysql = require('mysql');

//creo mi servidor:
var app = express();

//configuro el server para que parsee el body de las peticiones post
app.use(express.json());
app.use(express.urlencoded());


app.get("/pets", function(req, res){
 //ahora hacemos la conexión con la base de datos.
  fs.readFile('secret.json', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    password = obj.my_password;

    var connection = mysql.createConnection({
      host     : 'nuevainstancia.cojn3asekopo.us-east-2.rds.amazonaws.com',
      user     : 'constanza101',
      password :  password,
      database : 'schema_test'
    });

    //abro la conexión
    connection.connect();
    console.log("conectado!");

    //hago la query que me trae una lista de mascotas
    connection.query("SELECT * FROM pets", function (err, data) {
      return res.send(data);
      console.log(data);
    });
    //termino la conexión
    connection.end();
    console.log("desconectado!");
  });

});

app.listen(8000, function(){
  console.log('Server is listening in port 8000')
})
