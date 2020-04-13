import { ICalculator } from "../Interfaces/ICalculator";

export class Calculator implements ICalculator {
    Add(numbers: number[]): number {
        
        return numbers.reduce((a, b) => a + b, 0);
    }

    Subtract(numbers: number[]): number {
        throw new Error("Method not implemented.");
    }

    Multiply(numbers: number[]): number {
        throw new Error("Method not implemented.");
    }

    Divide(numbers: number[]): number {
        throw new Error("Method not implemented.");
    }
}