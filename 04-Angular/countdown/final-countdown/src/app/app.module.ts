import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SegundosComponent } from './segundos/segundos.component';
import { MinutosComponent } from './minutos/minutos.component';
import { HorasComponent } from './horas/horas.component';
import { DiasComponent } from './dias/dias.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CountdownComponent,
    SegundosComponent,
    MinutosComponent,
    HorasComponent,
    DiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
