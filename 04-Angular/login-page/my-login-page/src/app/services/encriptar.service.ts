import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncriptarService {

  constructor() { }

encripta(toEncrypt){
  let abc =['_','-','1', '2', '3', '4', '5','6','7','8','9','0','a','b','c','d','e','f','@','g','h','i','j','.','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let encrypted: string[] = []

  for( let i=0; i < toEncrypt.length; i++){
      var num = (abc.indexOf(toEncrypt[i])+3) % abc.length;
      encrypted.push(abc[num]);
    }

  let encryptedJoined: string =   encrypted.join("");
  console.log(encryptedJoined)
  return encryptedJoined;

}




desencripta(){}

}





/*
Entonces, según el for anterior, donde a[i] me da como
resultado la impresión de cada letra en cada iteracción,
, imprimiremos la letra que se encuentra 3 posiciones más
adelante para cada una de ellas.

var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
var a = "hornitorrinco";

for(i=0; i < a.length; i++){
    var num = abecedario.indexOf(a[i])+3
    console.log(abecedario[num])
};

Ejercicio:
hacer el proceso contrario.

var b = "kruplwruulpfr";

for(i=0; i < b.length; i++){
    var num = abecedario.indexOf(b[i])-3
    console.log(abecedario[num])
};
*/
