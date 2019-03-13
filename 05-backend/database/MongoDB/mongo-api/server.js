var colors = require ("colors");
var express = require("express");


var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/libros', function (err, client) {
  if (err) throw err

  var db = client.db('myFirstDB');
  var libros = db.collection('libros');

  libros.find().toArray(function (err, res) {
    if (err) throw err


      //creo mi servidor:
      var app = express();

      //configuro el server para que parsee el body de las peticiones post
      app.use(express.json());
      app.use(express.urlencoded());



      app.get("/books", function(req, res){
        libros.find().toArray(function(err, response) {
          if (err) throw err;
          //db.close();
          return  res.send(response);
        });
      })






      //POST/books
      app.post("/books", function(req, res){
        libros.insertOne(req.body, function(req, response){
          return  res.send(response);
        })
      })



        app.listen(8000, function(){
          console.log("Server is listening in port 8000")
        })

    })
  })
