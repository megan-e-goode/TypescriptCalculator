"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Calculator_1 = require("./Classes/Calculator");
var readline = require('readline');
var Main;
(function (Main) {
    var calculator;
    function Initialise() {
        calculator = new Calculator_1.Calculator();
        StartCalc();
    }
    Main.Initialise = Initialise;
    function StartCalc() {
        return __awaiter(this, void 0, void 0, function () {
            var numberOne, numberTwo, choice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Question("Enter first number: ")];
                    case 1:
                        numberOne = _a.sent();
                        return [4 /*yield*/, Question("Enter second number: ")];
                    case 2:
                        numberTwo = _a.sent();
                        return [4 /*yield*/, Question("What would you like to do?\n            1. Add\n            2. Multiply\n            3. Subtract\n            4. Divide\n            5. Exit\n            \n            Choice: ")];
                    case 3:
                        choice = _a.sent();
                        switch (choice) {
                            case "1":
                                calculator.Add(numberOne, numberTwo);
                                break;
                            case "2":
                                calculator.Multiply(numberOne, numberTwo);
                                break;
                            case "3":
                                calculator.Subtract(numberOne, numberTwo);
                                break;
                            case "4":
                                calculator.Divide(numberOne, numberTwo);
                                break;
                            case "5": break;
                            default:
                                console.log("Too bad. Looks like you'll have to restart the program now to try again...\n            ");
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function Question(query) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise(function (resolve) { return rl.question(query, function (ans) {
            rl.close();
            resolve(ans);
        }); });
    }
})(Main = exports.Main || (exports.Main = {}));
Main.Initialise();
