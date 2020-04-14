import { Calculator } from "./Classes/Calculator";
const readline = require('readline');

export namespace Main {    
    let calculator: Calculator;

    export function Initialise(): void {        
        calculator = new Calculator();

        StartCalc();       
    }

    async function StartCalc() { 
        let numberOne: number = await Question(`Enter first number: `);
        let numberTwo:number = await Question(`Enter second number: `);

        let choice = await Question(`What would you like to do?
            1. Add
            2. Multiply
            3. Subtract
            4. Divide
            5. Exit
            
            Choice: `);

            switch(choice) {
                case "1": calculator.Add(numberOne, numberTwo); 
                    break;
                case "2": calculator.Multiply(numberOne, numberTwo);
                    break;
                case "3": calculator.Subtract(numberOne, numberTwo);
                    break;
                case "4": calculator.Divide(numberOne, numberTwo);
                    break;
                case "5": break;
                default: console.log("Sorry, thats not an option!"); break;        
            }
    }

    function Question(query: string): Promise<any> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }
}

Main.Initialise();
