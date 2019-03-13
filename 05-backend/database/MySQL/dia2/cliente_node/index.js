var fs = require('fs');
var mysql = require('mysql');

var obj;
var password;
fs.readFile('secret.json', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  password = obj.my_password;

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password :  password,
    database : 'schema_test'
  });

  connection.connect();

  console.log("conectado!");

  //
/*
  connection.query("INSERT INTO pets (petname, pettype, usuarios_idusuarios, razas_idrazas) VALUES  ('Coco', 'perro', 1, 1);", function (err, data) {
    console.log(data);
  })
  */
  //

    connection.query("SELECT * FROM pets;", function (err, data) {
    console.log(data);
  })

  connection.end();

  console.log("desconectado!");


});
