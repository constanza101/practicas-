import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [ //Declaraciones de todo lo que existe (componentes y servicios)
    AppComponent, NavbarComponent, ProgressBarComponent
  ],
  imports: [ //No lo tocaremos
    BrowserModule
  ],
  providers: [], //Servicios
  bootstrap: [AppComponent] //Empezamos ("bootstrapeamos") nuestro módulo por el componente AppComponent
})
export class AppModule { }
