// 4. Usando del JSON abajo, crear una función para enviar el
//nombre de un color y recibir el codigo correcto
//del hexadecimal como respuesta:

/*
{
  "arrayColores":[(
  "rojo":"#f00",
  "verde":"#0f0",
  "azul":"#00f",
  "cyan":"#0ff",
  "magenta":"#f0f",
  "amarillo":"#ff0",
  "negro":"#000",
)]
}
*/

function tellMeHex(nombreColor){
  var jsonArray1 = '{"arrayColores":[{"rojo":"#f00","verde":"#0f0","azul":"#00f","cyan":"#0ff","magenta":"#f0f","amarillo":"#ff0","negro":"#000"}]}';
  var parseArray1 = JSON.parse(jsonArray1);
  console.log(parseArray1);
  var color = parseArray1.arrayColores[0][nombreColor];
  console.log(color);
  return color
}

function binds(){

  var cuadrado = document.querySelector(".cuadrado");

    cuadrado.addEventListener("click", function(){
                  cuadrado.style.backgroundColor = tellMeHex("verde");
                });

    cuadrado.addEventListener("dblclick", function(){
                  cuadrado.style.backgroundColor = tellMeHex("rojo");
                });

}


//usando el JSON abajo, crear una funcion para imprimir el nombre y telefono de los estudiantes.
/*

{
  "students": [{
    "nombre":"Gabriel", "telefono":111111111
  },{
    "nombre":"Jose", "telefono":222222222
  },{
    "nombre":"Marta", "telefono":333333333
  }]
}

*/


function guiaTelefonica(){
  var jsonArray01 = '{"students": [{  "nombre":"Gabriel", "telefono":111111111},{"nombre":"Jose", "telefono":222222222},{  "nombre":"Marta", "telefono":333333333}]}';
  var parseObj = JSON.parse(jsonArray01);
  console.log(parseObj.students[1].nombre);


  for(i=0; i<parseObj.students.length; i++){
      console.log(parseObj.students[i]);
  }

  var estudiante1 = {"nombre": "Constanza", "telefono":"444444444"};
  var estudiante2 = {"nombre": "Florencia", "telefono":"555555555"};

  parseObj.students.push(estudiante1);
  parseObj.students.push(estudiante2);

  console.log(JSON.stringify(parseObj));

}

guiaTelefonica()






















//.
