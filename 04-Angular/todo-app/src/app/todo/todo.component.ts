import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tareas:string[] = ["tarea 1"];

  addTask(){
    let my_input:HTMLInputElement = <HTMLInputElement>document.getElementById("nuevaTarea");
    let newTask:string = my_input.value;
    this.tareas.push(newTask);
    my_input.value = "";
  }


  showTask:boolean = true;
  deleteTask(task){
      let index:number = this.tareas.indexOf(task);
      this.tareas.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
