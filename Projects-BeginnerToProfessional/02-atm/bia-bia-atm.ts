#! /usr/bin/env node

import inquirer from "inquirer";
// or type answers = {
//    userid:String,
//    pin:Number,
//    accType:String
//}
//let Input:answers=await inquirer.prompt([])
const Input : {
    userid:string,
    pin:number,
    accType:string,
    options:string,
    cashAmount:number
} = await inquirer.prompt([
    {
       name:"userid",
       type:"string",
       message:"kindly, Enter your User ID: "
    },
    {
        name:"pin",
        type:"number",
        message:"kindly, Enter your PIN: ",
        when(answers){
            return answers.userid; //to take pin only if uderid is given
        },
    },
    {
        name:"accType",
        type:"list",
        choices:["Current Account","Savings Account"],
        message:"kindly, Select your Account Type: ",
        when(answers){
            return answers.pin;
        }
    },
    {
        name:"options",
        type:"list",
        choices:["Fast Cash","Balance inquiry", "Cash Withdraw"],
        message:"kindly, Choose from the given options: ",
        when(answers){
            return answers.accType;
        }
    },
    {
        name:"cashAmount",
        type:"list",
        choices:[1000,3000,5000,10000],
        message:"Choose Amount: ",
        when(answers){
            return answers.options==="Fast Cash";
        }
    },
    {
        name:"cashAmount",
        type:"number",
        message:"Enter Amount: ",
        when(answers){
            return answers.options==="Cash Withdraw";
        }
    },
]);
//as inquirer.prompt returns a promise, we can either use .then or await
console.log(Input.userid, Input.pin, Input.accType, Input.options,Input.cashAmount);

//destructuring //taken all objects in Input as variables
const {userid,pin,accType,options,cashAmount}=Input;

const Balance = Math.floor(Math.random() * 10000000)
if(userid && pin && cashAmount){
    if(Balance > cashAmount){
    let CurrentBalance = Balance - cashAmount;
    console.log(`Transaction Successful \n Your Current Balance is ${CurrentBalance}`);
} else {
    console.log("Insufficient Balance");
}
}
