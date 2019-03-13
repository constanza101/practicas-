import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent implements OnInit {

  dias:number = 1

  decreasing = ()=>{
    if (this.dias>0){
      this.dias--;
    }
  }

  constructor() { }

  ngOnInit() {
    this.decreasing, 1000*60*60*24
  }

}
