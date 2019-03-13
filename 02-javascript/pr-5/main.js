function red(mensaje){
  alert("ALERTA\n"+mensaje);
  var elem = document.getElementById("asd");
  elem.style.border="1px solid blue";
}

setTimeout(red, 3000)
