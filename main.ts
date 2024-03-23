#! /usr/bin/env node 

import inquirer from "inquirer";

//========================== Loop Start ========================================
let playAgain = 'true';
while (playAgain) {
    console.log("\n====================Play GAME OR NOT========================");

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: " Do you want to Play or Exit?",
            choices: ["Play Game", "Exit"]
        }
    ]);

    //=============================== You Guess =========================================
    if (answer.start === "Play Game") {
        console.log("\n===========Welcome To A Number Guessing Game================");
        const my_option = await inquirer.prompt([
            {
                type: "number",
                name: "choose",
                message: "Guess the number from 1 to 10"
            }
        ]);
        console.log("You Choose " + my_option.choose)


        //======================= Computer Guess =========================================
        let randomNumber = Math.floor(Math.random() * 10 + 1)
        console.log("Computer Choose " + randomNumber);



        //=============================== Conditional Statement ======================================
        if (my_option.choose === randomNumber) {
            console.log("Congratulations! You Won The Game");
        } else {
            console.log("Sorry You Can Loss The Game");
        }
    } else {
        break;
    }
}

console.log("\n\n==============Thank You For Using My Application=============="); 