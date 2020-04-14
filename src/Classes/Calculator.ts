import { ICalculator } from "../Interfaces/ICalculator";

export class Calculator implements ICalculator {
    Add(numberOne: number, numberTwo: number): void {
        
        console.log(+numberOne + +numberTwo);
    }

    Subtract(numberOne: number, numberTwo: number): void {
        
        console.log(+numberOne - +numberTwo);
    }

    Multiply(numberOne: number, numberTwo: number): void {
        
        console.log(+numberOne * +numberTwo);
    }

    Divide(numberOne: number, numberTwo: number): void {
        
        console.log(+numberOne / +numberTwo);
    }
}