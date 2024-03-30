#! /usr/bin/env node
//Shabang

import inquirer from "inquirer";
console.log ("\n=======================================\n");
console.log ("<<<<<<-- CREATED BY SAFDAR JAMAL -->>>>>>");
console.log ("/*/*/*/*/ SIMPLE CALCULATOR /*/*/*/*/\n");

const action = "Your Answer is : "

const answer = await inquirer.prompt([
  { message: "Enter Your First Number =", type: "number", name: "FirstNumber" },
  { message: "Enter Your Second Number =", type: "number", name: "SecondNumber" },
  {
    message: "Please Select the Operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

if (answer.operator === "Addition") {
    console.log (answer.FirstNumber, " + ", answer.SecondNumber)
      console.log(action , answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
    console.log (answer.FirstNumber, " - ", answer.SecondNumber)
  console.log(action , answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
    console.log (answer.FirstNumber, " x ", answer.SecondNumber)
  console.log(action , answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
    console.log (answer.FirstNumber, " / ", answer.SecondNumber)
  console.log(action , answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("Please Select the Valid Operator");
}

console.log ("\n=======================================");