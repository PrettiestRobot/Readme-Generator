// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    "Please enter your project desctription:",
    "Input project installation instructions:",
    "Please enter any necesary usage instructions:",
    "Please select a liscense:", "Please list contribution instructions:",
    "Please supply your github profile address:",
    "Please supply your email:"
];

inquirer.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'description'
    },
    {
        type: 'input',
        message: questions[1],
        name: 'installation'
    },
    {
        type: 'input',
        message: questions[2],
        name: 'usage'
    },
    {
        type: 'list',
        message: questions[3],
        name: 'liscense',
        choices: ['MIT']
    },
    {
        type: 'input',
        message: questions[4],
        name: 'contributing'
    },
    {
        type: 'input',
        message: questions[5],
        name: 'questions github'
    },
    {
        type: 'email',
        message: questions[6],
        name: 'questions email'
    },
    
]).then((data) => {
    console.log(data);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
