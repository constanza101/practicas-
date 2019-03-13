import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.component.html',
  styleUrls: ['./puertas.component.scss']
})
export class PuertasComponent implements OnInit {

  getResult(event){
  var options:any[]=[
    "Enhorabuena! has ganado 10.000€!",
    "Ohhhhhh! Lástima,la próxima vez será. Llévate esta colleja de consolación"
  ];

    var id: string = event.target.id;

    //alert(options[Math.round(Math.random()*1)]);

    var answer:string = options[Math.round(Math.random()*1)];
    this.showTextInDoor(id, answer)


    }

  showTextInDoor(doorId, rta){
    var myElement  = document.getElementById(doorId);
    var bgColor = (rta.indexOf("Enhorabuena")!=-1 ? "fondoVerde" : "fondoRojo");
    myElement.innerHTML = rta;
    myElement.classList.add(bgColor);

  }

  constructor() { }

  ngOnInit() {};
}
