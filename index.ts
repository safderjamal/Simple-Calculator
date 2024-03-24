#! usr/bin/env node
//Shabang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter First Number", type : "number", name: "FirstNumber"},
    {message: "Enter Second Number", type : "number", name: "SecondNumber"},
    {message: "Please select one of the operator to perform action", type : "list", name: "operator", 
    choices:["Addition", "Subtraction","Multiplication", "Division" ],},
]);

console.log (answer);

if(answer.operator === "Addition")
{console.log (answer.FirstNumber + answer.SecondNumber);}
else if(answer.operator === "Subtraction")
{console.log (answer.FirstNumber - answer.SecondNumber);}
else if(answer.operator === "Multiplication")
{console.log (answer.FirstNumber * answer.SecondNumber);}
else if(answer.operator === "Division")
{console.log (answer.FirstNumber / answer.SecondNumber);}
else {console.log("Please select the Valid Operator")}
