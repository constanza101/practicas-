import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor( public _user: UserService ) { }

  comprobarDatos(){
    var email:string = (<HTMLInputElement>document.getElementById("exampleInputEmail1")).value;
    var pass: string = (<HTMLInputElement>document.getElementById("exampleInputPassword1")).value;
    this._user.login(email, pass);
  }

  signup(){
    var email:string = (<HTMLInputElement>document.getElementById("exampleInputEmail1")).value;
    var pass: string = (<HTMLInputElement>document.getElementById("exampleInputPassword1")).value;
    this._user.register(email, pass)
  }

  ngOnInit() {
    this._user.login("", "");
  }

}
