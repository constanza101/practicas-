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
var Dinner = /** @class */ (function (_super) {
    __extends(Dinner, _super);
    function Dinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dinner.prototype.eat = function () {
        console.log("no me ha sentado mal, pero estaba sosa...");
    };
    return Dinner;
}(food_1.Food));
exports.Dinner = Dinner;
