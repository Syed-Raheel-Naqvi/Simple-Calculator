#! /usr/bin/env node
import inquirer from "inquirer";
const awnser = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (awnser.operator === "Addition") {
    console.log(awnser.firstNumber + awnser.secondNumber);
}
else if (awnser.operator === "Subtraction") {
    console.log(awnser.firstNumber - awnser.secondNumber);
}
else if (awnser.operator === "Multiplication") {
    console.log(awnser.firstNumber * awnser.secondNumber);
}
else if (awnser.operator === "Division") {
    console.log(awnser.firstNumber / awnser.secondNumber);
}
else {
    console.log("Please slect vslid operator");
}
