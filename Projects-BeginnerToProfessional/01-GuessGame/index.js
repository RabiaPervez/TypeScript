#! /usr/bin/env node
import inquirer from "inquirer";
// or type answers = {
//    userid:String,
//    pin:Number,
//    accType:String
//}
//let Input:answers=await inquirer.prompt([])
async function askQuestion() {
    let Random_num = Math.floor(Math.random() * 1000);
    const ans = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "number",
            name: "num",
            message: "Enter number from 0 to 1000",
        },
    ]);
    if (ans.num == Random_num) {
        console.log(`Congrats! you guessed the right number`);
    }
    else if (ans.num > Random_num) {
        console.log(`Your guess is too high, as the number was ${Random_num}`);
    }
    else {
        console.log(`Your guess is too low, as the number was ${Random_num}`);
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to guess again? press y or n: "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
}
;
startAgain();
