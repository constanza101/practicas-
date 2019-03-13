import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundos',
  templateUrl: './segundos.component.html',
  styleUrls: ['./segundos.component.scss']
})
export class SegundosComponent implements OnInit {

  segundos = 45;

  //Funcion flecha. El "this" se refiere a la clase
  decreasing = () => {
    if(this.segundos > 0){
      this.segundos--;
    }
  }

  //Función normal. El "this" se refiere a la función
/*  decreasing2(){
    console.log("Normal: ", this.segundos)
    this.segundos--;
  }
*/
  constructor() {
 }

  ngOnInit() {
    setInterval(this.decreasing, 1000);
  }


}
