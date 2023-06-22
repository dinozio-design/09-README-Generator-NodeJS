// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return "";
  } else { 
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://opensource.org/licenses/${license})`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (!license) {
  return "";
} else {
  return `[License Link for ${license}](https://opensource.org/licenses/${license})`;
}
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `This app is covered under ${license} license. For details and limitations of this license please visit:`;
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var tOc = "";
  var footNote = "";
  var licenseLink = renderLicenseLink(data.license);
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseSection = renderLicenseSection(data.license);

  data.tOc.forEach(element => {
    tOc += `- [${element}](#${element.toLowerCase()})
`;
  });

  const title = data.title.replaceAll(' ', '-');

  if (data.authorsNote) {
    footNote = `### Authors Notes: 
  _This README and accompanying repo have been brought to you by:_<br>© Sam Azimi - 2023 CodeCamp Studen.<br>Confidential and Proprietary. All Rights Reserved.`;
  };


  return `# ${title}
  ${licenseBadge}

## Description
${data.description}

## Table of Contents
${tOc}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}
${licenseLink}


## Contributing
If you would like to share your feedback and/or contribute your best practices to make our code better, feel free to get in touch with us via:
  GitHub: [${data.title} - link](https://github.com/${data.gitHub}/${title})<br>
  email: <${data.email}><br>

## Test
${data.tests}

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
