"use strict";
exports.__esModule = true;
var Breakfast_1 = require("./Breakfast");
var Lunch_1 = require("./Lunch");
var Dinner_1 = require("./Dinner");
var crumbledEggs = new Breakfast_1.Breakfast(1000, 200, "salty");
var paella = new Lunch_1.Lunch(1500, 800, "spicy");
var merluza = new Dinner_1.Dinner(800, 200, "fishy");
crumbledEggs.eat();
paella.eat();
merluza.eat();
/*

En index.ts importaremos las clases “Desayuno”, “Almuerzo” y “Cena”.
 Ahora crearemos 3 objetos:
Un objeto llamado “huevos revueltos”, usando como plantilla la clase “Desayuno”.
 Con un valor nutricional de 1.000, una cantidad de 200g y un sabor salado.
Un objeto llamado “paella”, usando como plantilla la clase “Almuerzo”.
Con un valor nutricional de 1.500, una cantidad de 800g y un sabor… “variado”.
Un objeto llamado “merluza”,  usando como plantilla la clase “Cena”.
Con un valor nutricional de 800, una cantidad de 200g y un sabor salado.


Ahora invocaremos las funciones “comer()” de cada uno de nuestros 3 objetos.
Finalmente, lo preprocesamos todo con typeScript para convertirlo en javascript.
Por último, ejecutaremos el archivo index.js en la terminal con Node.
*/
/*
var comida1 = new Food(200, 150, "sweet")
*/
