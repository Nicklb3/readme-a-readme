// function to return a license
function renderLicense(license) {
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

module.exports = generateMarkdown;
