import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PuertasComponent } from './puertas/puertas.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PuertasComponent
  ],
  imports: [
    HttpClientModule,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
