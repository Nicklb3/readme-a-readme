// function to return a license 
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
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

function renderLicenseLink(license) {
    if(license === 'MIT') {
        return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
    }
    if(license === 'Apache 2.0') {
        return 'http://www.apache.org/licenses/LICENSE-2.0';
    }
    if(license === 'GNU GPL v3.0') {
        return 'https://www.gnu.org/licenses';
    }
    if(license === 'None') {
        return 'No license selected';
    }
}

function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `License: ${license}`;
    }
}

// A function that renders the readme
function generateMarkdown (data) {
    return `
    <h1 align='center'> ${data.license}</h1>

    - ${renderLicenseBadge(data.license)}

    ## License

    This project is covered under the MIT license. Please refer to ${renderLicenseLink(
        data.license
    )} for more information.

    ---

    ## Description

    ${data.description}

    ---

    ## Table of Contents
    - [License](#license)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [Questions](#questions)

    ---

    ## Installation

    ${data.installation}

    ---

    ## Usage

    ${data.usage}

    ---

    ## Contributing

    ${data.contributing}

    ---

    ## Test

    ${data.test}

    ---

    ## Questions

    If you have any questions/concerns about the project, please contact me directly at ${
      data.email
    }. 
    
    Or for more details about this project you can check out my repo at my Github account, [${
      data.questions
    }](https://github.com/${data.questions}/).
    
    `;
}

module.exports = generateMarkdown;
