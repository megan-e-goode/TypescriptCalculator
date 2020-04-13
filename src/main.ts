import { Calculator } from "./Classes/Calculator";
const readline = require('readline');

export namespace Main {    
    let calculator: Calculator;

    export function Initialise() {
        calculator = new Calculator();

        Options();
    }

    async function Options() {
        let answer = await askQuestion(`What would you like to do?
        1. Add
        2. Multiply
        3. Subtract
        4. Divide
        
        Choice: `);
        
        switch(answer) {
            case "1": console.log("You selected Add!"); break;
            case "2": console.log("You selected Multiply!"); break;
            case "3": console.log("You selected Subtract!"); break;
            case "4": console.log("You selected Divide!"); break;
            default: console.log("Sorry, thats not an option!"); break;        
        }
    }

    function askQuestion(query) {
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
