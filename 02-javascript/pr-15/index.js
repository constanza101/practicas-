

function changeBgColor(elem, color, mi_estilo){
  elem.setAttribute("style", mi_estilo+ "background-color:"+color+";");
}


function changeColor(element, colorID){

  var my_style = element.getAttribute("style");

  changeBgColor(element,colorID,my_style);
/*
  var color = "";

  switch(colorID) {
    case "darkblue":
      color = "#003366";
      break;
    default:
      color = colorID;
      break;
  }
*/


}

var cuadrado = document.querySelector(".cuadrado");
cuadrado.addEventListener("mouseover", function(){ changeColor(cuadrado,"green"); });
cuadrado.addEventListener("mouseout", function(){changeColor(cuadrado,"red"); });
cuadrado.addEventListener("click", function(){changeColor(cuadrado,"blue"); });
cuadrado.addEventListener("dblclick", function(){changeColor(cuadrado,"yellow"); });



/*
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
*/

//ahora quiero agregar un evento al elemento cuadrado.
//que se disparará cuando se haga mouseover y que disparará la funcion green.
