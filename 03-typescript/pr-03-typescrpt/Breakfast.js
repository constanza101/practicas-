"use strict";
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
exports.__esModule = true;
var food_1 = require("./food");
var Breakfast = /** @class */ (function (_super) {
    __extends(Breakfast, _super);
    function Breakfast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breakfast.prototype.eat = function () {
        console.log("hmmmm yummy!");
    };
    return Breakfast;
}(food_1.Food));
exports.Breakfast = Breakfast;
