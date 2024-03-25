#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messege: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Seacond Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Answer:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Answer:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Answer:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Answer:", answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponent") {
    console.log("Answer:", answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please enter valid operator ");
};
