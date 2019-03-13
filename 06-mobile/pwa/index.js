
// https://appiconmaker.co/Home/Index/87638a5e-506b-460d-9252-7f6c1b77c89f
/*
//AGREGAR BOTON INSTALL
let installprompt;
window.addEventListener("beforeinstallprompt", e => {
  //TODO: enable install button
  e.preventDefault();
  installprompt = e;
})

//Mi_botón:
buttonInstall.addEventListener("click", e => {
  installprompt.prompt();
})

//Mediaquery to avoid translation ONLY when it's a PWA, and not in the browswer:
if(matchMedia('(display-mode: standalone)').matches){
  document.querySelector("head").InnetHTML += '<meta name="google" content="notranslate">'
}

*/

if (!localStorage.wins){
  localStorage.wins = 0;
}

setTimeout(function(){$('body > div:nth-child(7)').hide()}, 1000);

$(".img").click(function(){

  var clicked = ( $(this).attr('id')); //elección del usuario
  var a = ['piedra', 'papel', 'tijeras'];
  var random = a[Math.floor(a.length * Math.random())]; //elección random de la app
  $('.container-results').show();
  $(".container-choose").hide();

////
  if (
      (clicked == "piedra" && random == "piedra")
    ||(clicked == "papel" && random == "papel")
    ||(clicked == "tijeras" && random == "tijeras")
  ){
    $("#results").append('<h2> Empate! </h2>');
    $("#chosen").append('<img class="imagen" src="images/'+clicked+'-empate.png">');
    $("#random").append('<img class="imagen" src="images/'+random+'-empate.png">');
  }
  else if (
      (clicked == "piedra" && random == "papel")
    ||(clicked == "papel" && random == "tijeras")
    ||(clicked == "tijeras" && random == "piedra")
){
   $("#results").append('<h2> has perdido! xD </h2>');
   $("#chosen").append('<img class="imagen" src="images/'+clicked+'-sad.png">');
   $("#random").append('<img class="imagen" src="images/'+random+'-happy.png">');
  }
  else if (
      (clicked == "piedra" && random == "tijeras")
    ||(clicked == "papel" && random == "piedra")
    ||(clicked == "tijeras" && random == "papel")
){
    $("#results").append('<h2> has ganado! :D </h2>');
    $("#chosen").append('<img class="imagen" src="images/'+clicked+'-happy.png">');
    $("#random").append('<img class="imagen" src="images/'+random+'-sad.png">');


    localStorage.wins = parseInt(localStorage.wins)+1
    }
    $("#results").append('<h2> Num. victorias: '+String(localStorage.wins)+'</h2>');

})


function restart(){
  $('#chosen').empty();
  $('#results').empty();
  $('#random').empty();
  $('.container-results').hide();
  $(".container-choose").show()
}

function clearStorage(){
  localStorage.wins = 0;
  restart();
}

navigator.serviceWorker.register('./service-worker.js', {scope: '.'}).then(function(){
  console.log('service worker working!')
})

window.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise.
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});
