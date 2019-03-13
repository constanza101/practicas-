import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.scss']
})
export class HorasComponent implements OnInit {

  horas: number = 1

  decreasing = () => {
    if(this.horas > 0){
    this.horas--;
    }
  }

  constructor() { }

  ngOnInit() {
    setInterval(this.decreasing, 1000*60*60)
  }

}
