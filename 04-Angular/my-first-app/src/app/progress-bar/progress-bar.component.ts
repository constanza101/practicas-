import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

 progressNumber: number = 0
  constructor() { }

  ngOnInit() {
  }

  progreso(){
    if (this.progressNumber<100){
    this.progressNumber = this.progressNumber+10;
    }
  }

}
