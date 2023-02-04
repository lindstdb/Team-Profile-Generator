const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./template")
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");


teamArray = [];

function startUp() {

    function createTeam () {
       inquirer.prompt([{
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
        });
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

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter engineer's name."
            },

            {
                type: "input",
                name: "engineerId",
                message: "Enter engineer's employee ID number."
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Enter engineer's Github username."
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers. engineerEmail, answers. engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function addIntern(){
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "Enter interns name."
            },

            {
                type: "input",
                name: "internId",
                message: "Enter intern's employee ID number."
            },

            {
                type: "input",
                name: "internEmail",
                message: "Enter intern's E-mail."
            },

            {
                type: "input",
                name: "internSchool",
                message: "Enter intern's current school"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function htmlBuilder () {
        console.log("Dream Team Assembled!")
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }

    createTeam();
}

startUp();