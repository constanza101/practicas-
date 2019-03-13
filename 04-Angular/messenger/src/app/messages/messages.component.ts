import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  respuestas:object = {"hola" : "Hola, como estas?", "bien y tu?": "todo bien, que cuentas?", "estoy aburrido": "vamos a dar un paseo", "tengo hambre": "chupate el dedo grande"};
  messageLog: string[] = [ ];
 
  sendMessage(){
    let my_input:HTMLInputElement = <HTMLInputElement>document.getElementById("nuevoMensaje");
    let newMessage = my_input.value;
    this.messageLog.push(newMessage);
    my_input.value = "";
    this.messageLog.push(this.respuestas[newMessage.toLowerCase()])
  }



  enterMessage = (evento) =>{
    if(evento.keyCode == 13){
      this.sendMessage()
    }
  }


  constructor() { }

  ngOnInit() {
    document.getElementById("nuevoMensaje").addEventListener("keyup", this.enterMessage)
  }

}
