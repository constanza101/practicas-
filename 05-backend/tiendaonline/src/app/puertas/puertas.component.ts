import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.component.html',
  styleUrls: ['./puertas.component.scss']
})
export class PuertasComponent implements OnInit {
  apiUrl = "http://18.224.131.43";
  http = null;

  constructor(http: HttpClient) {
  this.http = http;
 }

  ngOnInit() {

alert(8)
    this.http.get(this.apiUrl+"/products", function(req, res){
      alert(6)
      let productos = JSON.parse(res.body);
      console.log(productos)
    })

  };
}
