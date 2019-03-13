import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoObjectComponent } from './todo-object/todo-object.component';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
