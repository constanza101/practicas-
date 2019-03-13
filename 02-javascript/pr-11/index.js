//crear una página que genere un listado de peliculas.

function agregar(){
    var peli = document.getElementById('pelicula').value
    var listado = document.querySelector("ul")
    listado.innerHTML = listado.innerHTML + '<li>'+ peli +'</li>'
}
