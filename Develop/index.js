// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title of your project?',
        validate: (titleInput) => {
            if (titleInput) {
                return true
            } else {
                return 'Input project Title.';
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Whats license does your project have?',
        choices: ['None','Apache 2.0','MIT','GPL v3.0'],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true
            } else {
                return 'Please select a licesne.';
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true
            } else {
                return 'Please provide a brief description  of your project.';
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are you installation steps?',
        validate: (installationInput) => {
            if (installationInput) {
                return true
            } else {
                return 'Please provide installation steps.';
            }
        }

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?',
        validate: (usageInput) => {
            if (usageInput) {
                return true
            } else {
                return 'What is your project used for?';
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can others contributions to your project?',
        validate: (contributionInput) => {
            if (contributionInput) {
                return true
            } else {
                return 'How can others contributions to your project?';
            }
                
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you test your project?',
        validate: (testInput) => {
            if (testInput) {
                return true
            } else {
                return 'How can you test your project?';
            }
                
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Whats your github username?',
        validate: (githubUsername) => {
            if (githubUsername) {
                return true
            } else {
                return 'Enter your github username.';
            }
                
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Whats your email address?',
        validate: (emailAddress) => {
            if (emailAddress) {
                return true
            } else {
                return 'Enter your email address.';
            }
                
        }
    },


];

// TODO: Create a function to write README file
const writeToFile = file => {
    return new Promise ((resolve, reject) => {
        fs.writeToFile('./generatedREADME.md', file, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok: true
            });

        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        let file = generateMarkdown(answers);
        writeToFile(file)
    });
};

// Function call to initialize app
init();

module.exports = questions;
