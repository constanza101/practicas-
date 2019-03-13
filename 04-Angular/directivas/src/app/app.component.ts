import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directivas';
  colors:string[] = ["red", "yellow", "green", "blue", "purple"]
  randomColor: string = this.colors[Math.round(Math.random()*4)];
  misEstilos: Object = {"background-color": this.randomColor};
  miClase: string = "ejemploDeDirectivaClase";
  miBooleano: boolean = false;
  cambiaBooleano(){
/*
    if (condition) {return doThis} else {return alternativa}
    condition ? doThis : alternativa;
*/
    this.miBooleano = !this.miBooleano;
  }

  misLibros:string[] = ["Detective Flanagan", "Willy Fog", "Los tres mosqueteros", "mobydick"];

  addBook(){
    var libroNew = (<HTMLInputElement>document.getElementById("nuevoLibro")).value;
    this.misLibros.push(libroNew);
  }
}
