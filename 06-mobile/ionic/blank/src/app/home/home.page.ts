import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }
  objectKeys = Object.keys;
  todo: object = localStorage.tasks ? JSON.parse(localStorage.tasks) : {"0":{"task_name":"crear lista","checked":false}};

  check_task(task_name){
    for (let i = 0; i < Object.keys(this.todo).length; i++) {
      if (this.todo[i]["task_name"] == task_name){
        this.todo[i]["checked"] = !this.todo[i]["checked"];
        console.log(this.todo[i]["checked"])
      }
    }
  }

  saveInfo = () => {
    localStorage.tasks = JSON.stringify(this.todo);
  }

  addTask = () => {
    var last_key = Object.keys(this.todo).length;
    this.todo[last_key+1] = {"task_name":"heya", "checked":false};
  }

  ngOnInit(){
    setInterval(this.saveInfo, 3000)
  }

}
