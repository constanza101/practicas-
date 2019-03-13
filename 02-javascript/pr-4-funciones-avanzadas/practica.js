PRACTICA:
1 -.........

- Crear un pequeño script que conste de 3 funciones anidadas
- La function1() tomará 3 numeros como parámetro de entrada
multiplicrá 3 esos números y pasará a la function2() el resultado
de la multiplicación y el último de los 3 números iniciales.
- La function2()sumará esos números y pasará el resultado a la
function3()
- La function3()hará un console.log()del resultado final;



function function1(num1, num2, num3){
  var multiplica = num1*num2*num3;
  function function2(multiplica, num3){
    var suma = multiplica+num3;
    function function3(){
      console.log(suma);
    }
    function3();
  }
  function2(multiplica, num3);
}
function1(1,2,3);




2...............
A: hacer la función 3, una función anónima:

function function1(num1, num2, num3){
  var multiplica = num1*num2*num3;
  function function2(multiplica, num3){
    var suma = multiplica+num3;
    (function(){
      console.log(suma);
    })();
  }
  function2(multiplica, num3);
}
function1(1,2,3);

RESULTADO: 9

-------------
B: hacer la función 2, una función anónima:

function function1(num1, num2, num3){
  var multiplica = num1*num2*num3;
  (function(){
    var suma = multiplica+num3;
    (function(){
      console.log(suma);
    })();
  })();
}
function1(1,2,3);


3................


Crear una función recursiva que hace un console.log y se
llamará a sí misma 10 veces antes de terminar.

function loop(i){
  console.log("vuelta numero"+i);
  if(i<11){
    loop(i+1); //<---- el +1 busca el valor de i, y le suma 1, para la próxima llamada.
  }
}

loop (0)

-------------------------------
function loop(i){
  console.log("vuelta numero"+i);
  if(i<11){
    loop(++i); //<--- así primero incrementa i, luego envia el valor nuevo de i
  }
}

loop (0)


-------------------------------
function loop(i){
  console.log("vuelta numero"+i);
  i++; // <-- incrementa el valor de i antes de de la recursión.
  if(i<11){
    loop(i); //<--- el valor de i ya se incrementó para hacer la llamada a la siguiente vuelta.
  }
}

loop (0)


------------------------
4..........;

setTimeout(function(){
  loop(0);
  }, 2000)








.
