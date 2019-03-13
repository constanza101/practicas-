
class Extraterrestre {
  altura:number;
  color:string;
  numOjos:number;

  constructor(alturaUserInput:number, colorUserInput:string, numOjosUserInput:number){
    this.altura = alturaUserInput;
    this.color = colorUserInput;
    this.numOjos = numOjosUserInput;
  }
}

class Marciano extends Extraterrestre{
  origen:string;

  constructor(altura:number, color:string, numOjos:number, origen:string){
    super(altura, color, numOjos);
    this.origen = origen;
  }
  colonizar(colonizado:string){
    console.log(colonizado);
    this.origen = colonizado;
  }

}

console.log("hola typescript")

const hola: string = "1";

let my_booleano: boolean;
my_booleano = false;

const anyos: number = 12;

let minutos: boolean[];

minutos = [true, true, false]

/////////

let my_tupla: [string, number, boolean]

my_tupla = ["a", 12, true]

////////

let a: any;

let aray_anys: any[];

 aray_anys = [12, true, "blabla", 34]

 ///////

 let myObject: object;

 myObject = {
   "a": 12
 }

 interface mis_tipos_de_datos {
   "clave1": number,
   "clave2": string,
   "clave3": boolean
 }

let myObject2: mis_tipos_de_datos;
let myObject3: mis_tipos_de_datos;

/////////

enum tipo_user {soft, hardcore}

let usuario: tipo_user;

usuario = tipo_user.soft;

///////

const error: null = null;

let error_flag: null;
error_flag = null;

//////

let indecisa: undefined;
indecisa = undefined;


//////

function suma(a:number=1, b:number=0){
  return a+b;
}

suma()


//export {Extraterrestre, Marciano};
