
var html_template = `<section class="stage"><figure class="ball bubble"></figure></section>`;


var element = document.querySelector('.padre');

function genera_burbuja(){
  //Inyecta una nueva burbuja dentro de "padre"
  element.innerHTML = element.innerHTML+html_template;

  //Genera un número al azar entre 100 y 400
  var size = Math.round(Math.random() * (400 - 100) + 100);

  //Generamos un margen al azar
  var marginTop = Math.round(Math.random() * 50)
  var marginBottom = Math.round(Math.random() * 50)
  var marginLeft = Math.round(Math.random() * 50)
  var marginRight = Math.round(Math.random() * 50)

  //Cambia el estilo (el heigh y el width) al número random
  var element2 = document.querySelector('.stage');
  element2.setAttribute('style', 'width:'+size+';'
                                +'height:'+size+';'
                                +'margin-top:'+marginTop
                                +'margin-bottom:'+marginBottom
                                +'margin-left:'+marginLeft
                                +'margin-right:'+marginRight);
}

setInterval(genera_burbuja, 1000)
