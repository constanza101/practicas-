/* crear una clase llamada Pais, en el constructor aceptará
los parámetros: numero de población, idioma, si está en guerra , lista de lis países
con los que está en guerra.

la clase Pais va a tener una función que se llamará botonRojo que cambiará las
variables "está en guerra" a true. Y añadirá a la lista de países en guerra
el país que se le indique como parámetro a la función.
*/
var Pais = /** @class */ (function () {
    function Pais(poblacion, idioma, enGuerra, listaNegra) {
        this.poblacion = poblacion;
        this.idioma = idioma;
        this.enGuerra = enGuerra;
        this.listaNegra = listaNegra;
    }
    Pais.prototype.botonRojo = function (nuevaGuerra) {
        this.enGuerra = true;
        this.listaNegra.push(nuevaGuerra);
    };
    return Pais;
}());
var china = new Pais(124123126, "mandarin", false, []);
console.log(china);
