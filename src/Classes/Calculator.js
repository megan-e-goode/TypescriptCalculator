"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (numberOne, numberTwo) {
        console.log(+numberOne + +numberTwo);
    };
    Calculator.prototype.Subtract = function (numberOne, numberTwo) {
        console.log(+numberOne - +numberTwo);
    };
    Calculator.prototype.Multiply = function (numberOne, numberTwo) {
        console.log(+numberOne * +numberTwo);
    };
    Calculator.prototype.Divide = function (numberOne, numberTwo) {
        console.log(+numberOne / +numberTwo);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
