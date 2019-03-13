

function calculadora(operacion){

        function suma(num1, num2){
          return (num1 + num2);
        }

        function resta(num1, num2){
          return (num1-num2);
        }

        function multiplica(num1, num2){
          return(num1*num2);
        }

        function divide(num1, num2){
          return(num1/num2);
        }

        function randomNum(){
          return Math.round(Math.random()*9999)
        }


        function squareRootNum(num1){
          return Math.sqrt(num1)
        }

        function redondeo(num1){
          return Math.round(num1)
        }

  var numero1 = parseInt(document.getElementById('num1').value);
  var numero2 = parseInt(document.getElementById('num2').value);

  var total = 0;

  if(operacion == "suma"){
    total = suma(numero1, numero2);
  }
  if(operacion == "resta"){
    total = resta(numero1, numero2);
  }
  if(operacion == "multiplica"){
    total = multiplica(numero1, numero2);
  }
  if(operacion == "divide"){
    total = divide(numero1, numero2);
  }
  if(operacion == "randomNum"){
    total = randomNum();
  }
  if(operacion == "squareRootNum"){
    total = resta(numero1);
  }

  if(operacion == "redondeoredondeo"){
    total = redondeo(numero1);
  }

  document.getElementById("output").innerHTML = total;

}
