import{mestizo, pastor, yorkshire} from "./razas.js";
import{perro} from "./perro.js";

var Shiva = new mestizo ("mediana", "Shiva", 1, "canela");
var Baloo = new pastor ("grande", "Baloo", 3, "negro");
//var Cae = new perro ("pequeño", "Cae", 2, "gris");
var Jackie = new yorkshire ("mini", "Jackie", 3, "marron");

//var pipican = [Shiva, Baloo, Cae, Jackie]

console.log(Shiva.hablar());
console.log(Baloo.hablar());
console.log(Jackie.hablar());
