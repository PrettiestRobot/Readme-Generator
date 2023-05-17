// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    "What is the title of your project?",
    "Please enter your project desctription:",
    "Input project installation instructions:",
    "Please enter any necessary usage instructions:",
    "Please select a license:", "Please list contribution instructions:",
    "Please supply your github profile address:",
    "Please supply your email:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['MIT']
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'github'
        },
        {
            type: 'email',
            message: questions[7],
            name: 'email'
        },
        
    ]).then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}README.md`;
        writeToFile(filename, data);
    })
}

// Function call to initialize app
init();
