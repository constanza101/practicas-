"use strict";
exports.__esModule = true;
var Food = /** @class */ (function () {
    function Food(nutriValue, grams, tasteGroup) {
        this.nutriValue = nutriValue;
        this.grams = grams;
        this.tasteGroup = tasteGroup;
        console.log(nutriValue);
    }
    return Food;
}());
exports.Food = Food;
/*
En comidas.ts crearemos una clase llamada “Comida”
cuyo constructor recibirá los parámetros:
valor alimenticio, cantidad y sabor (dulce, salado, agridulce, etc…)


Exportamos la clase Comida.
La importamos dentro del archivo “desayunos.ts”.


En “desayunos.ts” crearemos una nueva clase llamada “Desayuno”,
que extenderá la clase “Comida”. Desayuno tendrá una función
llamada “comer()” que imprimirá un log diciendo “hmmmm yummy!”.


Exportaremos la clase “Desayuno”.
Ahora importaremos la clase “Comida” dentro de “almuerzos.ts”


En “almuerzos.ts” crearemos la clase “Almuerzo”,
que extenderá “Comida” pero tendrá una función llamada “comer()”,
que imprimirá un log diciendo “ugghhh, creo que me ha sentado mal…”


Exportaremos la clase “Almuerzo”.


En “cena.ts” importaremos la clase “Comida”.
Crearemos una nueva clase llamada “Cena” que extenderá la clase “Comida”.
Además, tendrá una función llamada “comer()”, que imprimirá un log diciendo
“no me ha sentado mal, pero estaba sosa”.


Ahora exportaremos la clase Cena.


En index.ts importaremos las clases “Desayuno”, “Almuerzo” y “Cena”.
 Ahora crearemos 3 objetos:
Un objeto llamado “huevos revueltos”, usando como plantilla la clase “Desayuno”.
 Con un valor nutricional de 1.000, una cantidad de 200g y un sabor salado.
Un objeto llamado “paella”, usando como plantilla la clase “Almuerzo”.
Con un valor nutricional de 1.500, una cantidad de 800g y un sabor… “variado”.
Un objeto llamado “merluza”, usando como plantilla la clase “Cena”.
Con un valor nutricional de 800, una cantidad de 200g y un sabor salado.


Ahora invocaremos las funciones “comer()” de cada uno de nuestros 3 objetos.
Finalmente, lo preprocesamos todo con typeScript para convertirlo en javascript.
Por último, ejecutaremos el archivo index.js en la terminal con Node.
*/
