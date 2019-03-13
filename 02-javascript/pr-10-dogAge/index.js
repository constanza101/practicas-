/*

//primero creo  una función con un parámetro (humanAge) que será el input (la edad en años humanos)
function calculateDogAge(humanAge){
  //luego genero una variable "dogAge" que será igual a humanAgex7.
  var dogAge = humanAge*7
  //para imprimirlo hago un console.log() con los string y el parámetro dogAge que hemos calculado.
  console.log("Your dog is "+dogAge+" years old in dog-years.")
  //Para usarlo, tengo que conseguir un return, pero como return no puede darnos más de un
  //tipo de resultados (o sea no puede dar strings y parámetros al mismo tiempo), entonces
  //ponemos el resultado en una variable y luego retornamos el nombre de esa variable:
  var dogYears = "Your dog is "+dogAge+" years old in dog-years."
  return dogYears
}

//Ahora que ya tenemos retornado el resultado, hacemos una función que
//nos mostrará el resultado en la pantalla: (toma el valor ingresado,
//llama la otra función que hace el cálculo, obtiene el resultado y lo envía a la pantalla.)

//Primero tomará el valor ingresado en el input desde nuestra página web
//para eso usamos la función .value, aplucada al input con id=age.
//document.getElementById(age) nos encuentra el input donde está la edad en años (humanos).
//.value nos da el valor dentro de este input.
function calculate(){
//creamos una variable yearAge para guardar el valor ingresado en el input.
  var yearAge = document.getElementById('age').value
//creamos una variable para ingresar este número como parámetro en la función calculateDogAge()
  var resultado = calculateDogAge(yearAge)
//seleccionamos el elemento donde queremos inyectar el resultado de nuestra cuenta.
//utilizando el querySelector().innerHTML = será igual al resultado de la función inicial.
    document.querySelector("h1").innerHTML = resultado
};

*/


/*
4. Crearemos una función llamada “CelsiusToFarenheit()” que recibirá un input
 (la temperatura en grados Celsius) y nos imprimirá en la pantalla la
 temperatura equivalente en grados Farenheit (la fórmula para cambiar de grados
 Celsius a Farenheit es la siguiente: grados Farenheit = grados Celsius × 1.8 + 32)
*/

/*
//Creo una función que recibe el parámetro indicado en el input de la web
//que será un valor de temperatura en celcius.
function celsiusToFarenheit(celsius){
//Creo una variable para el resultado de ese número, convirtiéndolo a Farenhei.
var far = celsius*1.8+32
//Hago el return de la variable far.Así podremos usar este resultado más tarde.
return far
}

// Ahora creo la función que tomará el valor ingresado en el input y lo cambiará
//luego de pasarlo por la función que hace el cáclculo.
function calculateF(){
  //obtengo el valor en el input:
var gradosC = document.getElementById("celsius").value
  //hago una variable para poner el resultado de la función anterior, poniendo gradosC como parámetro
var resultado = celsiusToFarenheit(gradosC)
//inyecto el resultado en el nodo donde quiero que aparezca como texto:
document.querySelector("h2").innerHTML = resultado
}


*/


function calculateDogAge(humanAge){
  var dogAge = humanAge*7
  console.log("Your dog is "+dogAge+" years old in dog-years.")
  var dogYears = "Your dog is "+dogAge+" years old in dog-years."
  return dogYears
}

function calculate(){
  var yearAge = document.getElementById('age').value
  var resultado = calculateDogAge(yearAge)
  document.querySelector("h1").innerHTML = resultado
};

function celsiusToFarenheit(celsius){
  var far = celsius*1.8+32
  return far
}

function calculateF(){
    var gradosC = document.getElementById("celsius").value
    var resultado = celsiusToFarenheit(gradosC)
    document.querySelector("h2").innerHTML = resultado
}
