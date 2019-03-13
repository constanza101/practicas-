var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Extraterrestre = /** @class */ (function () {
    function Extraterrestre(alturaUserInput, colorUserInput, numOjosUserInput) {
        this.altura = alturaUserInput;
        this.color = colorUserInput;
        this.numOjos = numOjosUserInput;
    }
    return Extraterrestre;
}());
var Marciano = /** @class */ (function (_super) {
    __extends(Marciano, _super);
    function Marciano(altura, color, numOjos, origen) {
        var _this = _super.call(this, altura, color, numOjos) || this;
        _this.origen = origen;
        return _this;
    }
    Marciano.prototype.colonizar = function (colonizado) {
        console.log(colonizado);
        this.origen = colonizado;
    };
    return Marciano;
}(Extraterrestre));
console.log("hola typescript");
var hola = "1";
var my_booleano;
my_booleano = false;
var anyos = 12;
var minutos;
minutos = [true, true, false];
/////////
var my_tupla;
my_tupla = ["a", 12, true];
////////
var a;
var aray_anys;
aray_anys = [12, true, "blabla", 34];
///////
var myObject;
myObject = {
    "a": 12
};
var myObject2;
var myObject3;
/////////
var tipo_user;
(function (tipo_user) {
    tipo_user[tipo_user["soft"] = 0] = "soft";
    tipo_user[tipo_user["hardcore"] = 1] = "hardcore";
})(tipo_user || (tipo_user = {}));
var usuario;
usuario = tipo_user.soft;
///////
var error = null;
var error_flag;
error_flag = null;
//////
var indecisa;
indecisa = undefined;
//////
function suma(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 0; }
    return a + b;
}
suma();
//export {Extraterrestre, Marciano};
