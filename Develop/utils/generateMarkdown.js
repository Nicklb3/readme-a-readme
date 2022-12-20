const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)'
  } 
  if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  if (license === 'GNU GPL v3.0') {
    return '![License: GNU GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  if (license === 'None') {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
  }
  if (license === 'Apache 2.0') {
    return 'http://www.apache.org/licenses/LICENSE-2.0';
  }
  if (license === 'GNU GPL v3.0') {
    return 'https://www.gnu.org/licenses';
  }
  if (license === 'None') {
    return 'A license was not selected';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `License: ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contexts:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contributors:
  ### ${answer.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test his app:
  ### ${answer.test}

  ## Questions:
  ### If your have any questions, you may contact me at either
  ### Github: https://github.com/${answer.github}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
