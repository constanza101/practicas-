import{ballena} from "./mamiferos.js";
import{pinguino} from "./aves.js";
import{animal} from "./animal.js";

var ballena_azul = new ballena("azul", 180);
var franca_austal = new ballena("franca austral", 100);

var ballenas = [ballena_azul, franca_austal];

//console.log(ballenas);

var magallanes = new pinguino( "magallanes", "negro y blanco");

var guepardo = new animal ("guepardo");
console.log(guepardo);

guepardo.hablar();
