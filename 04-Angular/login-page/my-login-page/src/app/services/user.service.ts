import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EncriptarService } from './encriptar.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged:boolean = false;

  datosDeUsuario: object =  {
    "constanza101@hotmail.com": "1234"
  }

  login(userEmail, password){
    const cookieExists: boolean = this._cookies.check('loggeado');
    if(!cookieExists){
      var userEmails = Object.keys(this.datosDeUsuario);
      if (userEmails.includes(userEmail)){
        var passCorrect = this.datosDeUsuario[userEmail];
        if (password == passCorrect){
          alert("bienvenido "+userEmail+"!");
          this.isLogged = true;
          //galletita = logged

          var chips = this._encriptar.encripta(userEmail);
          this._cookies.set( 'galletita', chips );
        }
      }
    }
    else {
      alert("bienvenido "+userEmail+"!");
      this.isLogged = true;
    }
  }

  logout(){
    this.isLogged = false;
    this._cookies.delete('loggeado');

  }

  register(userEmail, password){
    var userEmails = Object.keys(this.datosDeUsuario);
    if (userEmails.includes(userEmail)){
      alert( "ya exise un usuario con ese email." )
    }
    else {
    this.datosDeUsuario[userEmail] = password;
    this.login(userEmail,password)
    }
  }

  constructor(public _cookies: CookieService , public _encriptar: EncriptarService ) { }
}
