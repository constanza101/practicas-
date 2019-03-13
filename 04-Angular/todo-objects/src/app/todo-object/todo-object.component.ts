import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-todo-object',
  templateUrl: './todo-object.component.html',
  styleUrls: ['./todo-object.component.scss']
})
export class TodoObjectComponent implements OnInit {

//  tareas:Task[] = [new Task(1,"pepito"), new Task(2,"marito")];

  addTask(){
    let my_input:HTMLInputElement = <HTMLInputElement>document.getElementById("nuevaTarea");
    let newTaskName:string = my_input.value;
    let newId:number = this._taskService.getTasks().length+1;

    my_input.value = "";

    this._taskService.createTask(new Task(newId, newTaskName));

  }

  getTasks(){
    return this._taskService.getTasks();
  }

  deleteTask(taskId){
    this._taskService.removeTask(taskId)
  }

  constructor(public _taskService:TaskService ) { }

  ngOnInit() {
  }

}
