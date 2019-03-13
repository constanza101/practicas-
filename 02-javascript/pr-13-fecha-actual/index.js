
/*


*/


function hora(){
  var ahora  = new Date();
  var dateString = ahora.toString()
  document.querySelector("h1").innerHTML = dateString;
}
setInterval(hora, 1000);
