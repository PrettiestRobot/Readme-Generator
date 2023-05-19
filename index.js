// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please enter your project desctription:",
    "Input project installation instructions:",
    "Please enter any necessary usage instructions:",
    "Please select a license:", 
    "Please list contribution instructions:",
    "Please supply your github profile address:",
    "Please supply your email:"
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    let badge;

  switch (data.license) {
    case "MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 2-Clause 'Simplified' License":
      badge = "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      badge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      badge = "[![License: Boost Software 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 2.0":
      badge = "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU General Public License v2.0":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      badge = "";
      break;
  }  


const readmeContent = `
# ${data.title}

${badge}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Contact](#contact)

## Description <a name="description"></a>

${data.description}

## Installation <a name="installation"></a>

${data.installation}

## Usage instructions <a name="usage"></a>

${data.usage}

## License <a name="license"></a>

This project is licensed under the ${data.license} license.

## How to contribute <a name="contribute"></a>

${data.contributing}

## Contact and questions <a name="contact"></a>

GitHub: ${data.github}

Email: ${data.email}
`;

fs.writeFile(`./output/${filename}`, readmeContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${filename} successfully created!`);
  }
});


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
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense",
                "Other"
              ]
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
