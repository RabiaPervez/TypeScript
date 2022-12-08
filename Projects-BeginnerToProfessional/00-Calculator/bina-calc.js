#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//create promise to end the rainbow animation
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('You are welcome to do calculation in My Calculator');
    await sleep();
    rainbowTitle.stop();
    console.log(`___________________
    |  _______________  |
    | |00           0.| |
    | |_______________| |
    |  ___ ___ ___ ___  |
    | | 7 | 8 | 9 | + | |
    | |___|___|___|___| |
    | | 4 | 5 | 6 | - | |
    | |___|___|___|___| |
    | | 1 | 2 | 3 | x | |
    | |___|___|___|___| |
    | | . | 0 | = | / | |
    | |___|___|___|___| |
    |___________________|`);
} //animation will start from here
await welcome();
async function askQuestion() {
    const ans = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "which operation do you want to perform? \n",
            choices: ["addition", "subtraction", "multiplication", "division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:"
        },
    ]);
    //.then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers);
    if (ans.operator == "addition") {
        console.log(chalk.green(`The sum of ${ans.num1} and ${ans.num2} is ${ans.num1 + ans.num2}`));
    }
    else if (ans.operator == "subtraction") {
        console.log(chalk.green(`The difference of ${ans.num1} and ${ans.num2} is ${ans.num1 - ans.num2}`));
    }
    else if (ans.operator == "multiplication") {
        console.log(chalk.green(`The product of ${ans.num1} and ${ans.num2} is ${ans.num1 * ans.num2}`));
    }
    else if (ans.operator == "division") {
        console.log(chalk.green(`The quotient of ${ans.num1} and ${ans.num2} is ${ans.num1 / ans.num2}`));
    }
}
;
//askQuestion(); 
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y or n: "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
}
startAgain();
