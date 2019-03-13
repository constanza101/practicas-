class perro {
  constructor(tamaño, nombre, edad, color){
    this.tamaño = tamaño;
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
  }
  hablar(){console.log("soy un perro y me llamo: "+ this.nombre);}

}

export{perro}
