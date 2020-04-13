"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; }, 0);
    };
    Calculator.prototype.Subtract = function (numbers) {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.Multiply = function (numbers) {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.Divide = function (numbers) {
        throw new Error("Method not implemented.");
    };
    return Calculator;
}());
exports.Calculator = Calculator;
