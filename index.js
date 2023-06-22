// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your prohect title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
},
{
    type: 'checkbox',
    name: 'tOc',
    message: 'What sections do you want to include in the Table of Contents?',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Test', 'Questions'],
},

{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your application?',
    choices: ['MIT', 'ISC', 'PDDL', 'Zlib',],
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test cases and instructions.',
},
{
    type: 'input',
    name: 'gitHub',
    message: 'What is your gitHub username?',
},
{
    type: 'email',
    name: 'email',
    message: 'What is your email?',
},
{
    type: 'confirm',
    name: 'authorsNote',
    message: 'Do you want to add footnotes?',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const data = markDown(answers);
            writeToFile("README.md", data);
        });

}

// Function call to initialize app
init();
