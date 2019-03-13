import{perro}from "./perro.js"

class mestizo extends perro {
  hablar(){console.log("soy mestizo y me llamo: "+ this.nombre);}
}

class pastor extends perro {
  hablar(){console.log("soy pastor y me llamo: "+ this.nombre);}
}

class yorkshire extends perro {
  hablar(){console.log("soy yorkshire y me llamo: "+ this.nombre);}
}


export{mestizo, pastor, yorkshire };
