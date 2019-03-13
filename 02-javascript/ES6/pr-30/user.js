/*
En el user.js vamos a crear una clase llamada “usuario”
 que tendrá todas estas variables en su constructor:
Año de nacimiento del visitor
Acepta la política de cookies?
Tipo de usuario (puede tener las opciones “soft” o “hardcore”).
Lista de productos visitados


Luego, añádele a la clase también una función llamada
“describe_user()” que imprimirá en la terminal todas esas variables.
 Haz que tu archivo “user.js” exporte esa clase.
*/


class Usuario {
  constructor(name, email, pass, birthDate, cookies){
    console.log("iniciando nuevo objeto de user");
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.birthDate = birthDate;
    this.cookies = false;
    this.visitedPetsList = [];
  }

  setCookies(cookiesParam){
    this.cookies = cookiesParam;
  }

  getCookies(){
    return this.cookies;
  }

  getUserInfo(){
    var info = "nombre: " +this.name + " email: " + this.email;
    return info;
  }
}

export {Usuario};
