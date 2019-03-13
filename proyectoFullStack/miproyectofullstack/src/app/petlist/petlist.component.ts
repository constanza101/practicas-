import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss']
})
export class PetlistComponent implements OnInit {

  constructor() { }

  pets: string[];

  ngOnInit() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.pets = JSON.parse(xhttp.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:8000/pets", true);
    xhttp.send();
  }

}
