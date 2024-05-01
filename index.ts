#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
console.log ("\n=======================================\n");
console.log ("<<<<<<-- CREATED BY SAFDAR JAMAL -->>>>>>");
console.log ("/*/*/*/*/ SIMPLE CALCULATOR /*/*/*/*/\n");

let condition = true;
while (condition){
//Input from User

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

//Apply conditions if select the Operator

if (answer.operator === "Addition") {
    console.log (`${answer.FirstNumber} + ${answer.SecondNumber}`)
      console.log(`Your Answer is : ${answer.FirstNumber + answer.SecondNumber}\n`);
} else if (answer.operator === "Subtraction") {
  console.log (`${answer.FirstNumber} - ${answer.SecondNumber}`)
  console.log(`Your Answer is : ${answer.FirstNumber - answer.SecondNumber}\n`);
} else if (answer.operator === "Multiplication") {
  console.log (`${answer.FirstNumber} x ${answer.SecondNumber}`)
  console.log(`Your Answer is : ${answer.FirstNumber * answer.SecondNumber}\n`);
} else if (answer.operator === "Division") {
  console.log (`${answer.FirstNumber} / ${answer.SecondNumber}`)
  console.log(`Your Answer is : ${answer.FirstNumber / answer.SecondNumber}\n`);
} else {
  console.log("Please Select the Valid Operator");
}

//Apply Loop
const calculation = await inquirer.prompt({
  message: "Do you want to Calculate more ?",
  type: "confirm",
  name: "calculate",
 default: false
})
if(calculation.calculate == true){
  condition = true;
  console.log("\t");
}
else {
  condition = false;
}
}
console.log ("\n=======================================");




