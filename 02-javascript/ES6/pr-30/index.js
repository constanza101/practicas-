//en index pongo lo que es la ejecución principal.
import{Usuario} from "./user.js";


var gabriel = new Usuario("Gabriel", "gabriel@neoland.es");
var constanza = new Usuario("Constanza", "constanza101@hotmail.com");
console.log(gabriel);
console.log(constanza);

gabriel.setCookies(true);
console.log( gabriel.getUserInfo() );
console.log( constanza.getUserInfo() );

console.log(gabriel);
console.log(constanza);
