import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { PersonalComponent } from './personal/personal.component';
import { Per1Component } from './per1/per1.component';
import { Per2Component } from './per2/per2.component';
import { Per3Component } from './per3/per3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    PersonalComponent,
    Per1Component,
    Per2Component,
    Per3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
