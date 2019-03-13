class animal{
  constructor(tipo){
    this.tipo = tipo;
  }

  hablar(){
    alert("Hola, soy ", this.tipo);
  }
}

export{animal};
