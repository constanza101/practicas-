import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BodyComponent } from './body/body.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './header/header.component'
import { CookieService } from 'ngx-cookie-service';
import { EncriptarService } from './services/encriptar.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, CookieService, EncriptarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
