import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Error404Component } from './error404/error404.component'


//Módulos que nos da angular para hacer el routing
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'gallery', component: GaleriaComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}, //RUTA POR DEFECTO
  {path: '**', component: Error404Component}, //RUTA DEL ERROR
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
