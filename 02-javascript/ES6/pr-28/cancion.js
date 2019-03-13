class cancion{
  constructor(titulo, genero, duracion){
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
  }
  buscarEnGoogle(){
    console.log("https://www.google.com/search?q="+this.titulo);
  }
}


export{cancion};
