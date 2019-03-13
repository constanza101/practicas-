import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tareas:Task[] = [new Task(1,"pepito"), new Task(2,"marito")];

  constructor() { }


  createTask(task:Task){
    this.tareas.push(task);
    //console.log(JSON.stringify(this.tareas));
  };

  getTasks(){
    return this.tareas;
  }

  removeTask(id){
      for (let i=0; i<this.tareas.length; i++){
        if (id == this.tareas[i].id){
          this.tareas.splice(i,1);
        }
      }
  };

}
