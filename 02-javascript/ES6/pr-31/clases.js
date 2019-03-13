class Extraterrestre {
  constructor(altura, color, numOjos){
    this.altura = altura;
    this.color = color;
    this.numOjos = numOjos;
  }
}

class Marciano extends Extraterrestre{
  constructor(altura, color, numOjos, origen){
    super(altura, color, numOjos);
    this.origen = origen;
  }
  colonizar(colonizado){
    console.log(colonizado);
    this.origen = colonizado;
  }

}




export {Extraterrestre, Marciano};
