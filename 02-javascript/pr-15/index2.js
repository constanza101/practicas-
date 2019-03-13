
var cuadrado = document.querySelector(".cuadrado");
var mi_estilo = cuadrado.style.cssText;

function green(){
  cuadrado.setAttribute("style", "background-color:green;" + mi_estilo);
}

function red(){
  cuadrado.setAttribute("style", "background-color:red;" + mi_estilo);
}

function blue(){
  cuadrado.setAttribute("style", "background-color:blue;" + mi_estilo);
}

function yellow(){
  cuadrado.setAttribute("style", "background-color:yellow;" + mi_estilo);
}

//ahora quiero agregar un evento al elemento cuadrado.
//que se disparará cuando se haga mouseover y que disparará la funcion green.

cuadrado.addEventListener("mouseover", green);
cuadrado.addEventListener("mouseout", red);
cuadrado.addEventListener("click", blue);
cuadrado.addEventListener("dblclick", yellow);
