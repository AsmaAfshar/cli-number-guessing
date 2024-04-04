#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game:");
const number = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: " Please guess a number between 1-6: ",
    },
]);
if (number.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guess a correct number.");
}
else {
    console.log("Sorry! you guess a wrong number");
}
;
