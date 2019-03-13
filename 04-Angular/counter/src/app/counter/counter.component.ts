import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  cuenta: number = 0

  constructor() { }
  ngOnInit() {
  }
  incrementa(){
    this.cuenta++
  }
  decrementa(){
    this.cuenta--
  }
}

/*
crearemos una variable llamada “cuenta”, que será un number
 que comenzará por “0”.
Crearemos un par de funciones.
La primera, llamada “incrementa()”, incrementará en +1 el
valor de la variable “cuenta”.
La segunda, llamada “decrementa()”, reducirá en -1 el valor
de la variable “cuenta”.
*/
