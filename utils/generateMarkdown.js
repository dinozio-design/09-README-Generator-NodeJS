// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return "";
  };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var tOc = "";
  var footNote = "";
  var licenseLink = renderLicenseBadge('MIT');
  var licenseBadge = "";
  var licenseSection = "";
  console.log(data.tOc[0]);
  data.tOc.forEach(element => {
    tOc += `- [${element}](#${element.toLowerCase()})
`;
  });

  const title = data.title.replaceAll(' ', '-');

  if (data.authorsNote) {
    footNote = `### Authors Notes: 
  _This README and accompanying repo have been brought to you by:_<br>© Sam Azimi - 2023 CodeCamp Studen.<br>Confidential and Proprietary. All Rights Reserved.`;
  };
  return `# ${title} | ${licenseLink}

## Description
${data.description}

## Table of Contents
${tOc}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
If you would like to share your feedback and/or contribute your best practices to make our code better, feel free to get in touch with us via:
  GitHub: [${data.title} - link](https://github.com/${data.gitHub}/${title})<br>
  email: <${data.email}><br>

## Test
We haven't implemented the test features yet, eventhough it is best practice to start development with first writing the test cases.Not withstanding, if you would like to share your test methods, feel free to get in touch with us via:
  GitHub: [${data.title} - link](https://github.com/${data.gitHub}/${title})<br>
  email: <${data.email}><br>

## Questions
If you have any questions, you can reach us via:
  GitHub: [${data.title} - link](https://github.com/${data.gitHub}/${title})<br>
  email: <${data.email}><br>

${footNote}
`;
}

module.exports = generateMarkdown;
