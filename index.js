const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

teamArray = [];

function StartUp()
    function createTeam () {
        inquirer.createPromptModule([{
            type: "list",
            message: "What type of employee are you adding?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "I'm done adding employees."]
        }]).then(function(userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }

    function addManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter manager's name."
            },

            {
                type: "input",
                name: "managerId",
                message: "Enter the manager's employee ID number."
            },

            {
                type:"input",
                name: "managerEmail",
                message: "Enter the manager's email."
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter managers office number."
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam(); 
        });
    }