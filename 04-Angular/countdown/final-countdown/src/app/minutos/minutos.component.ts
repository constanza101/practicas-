import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minutos',
  templateUrl: './minutos.component.html',
  styleUrls: ['./minutos.component.scss']
})
export class MinutosComponent implements OnInit {

  minutos:number = 2;

  decreasing =  ()=>{
      if(this.minutos > 0){
        this.minutos--;
      }

  }

  constructor() { }

  ngOnInit() {
    setInterval(
      this.decreasing, 1000*60)
  }

}
