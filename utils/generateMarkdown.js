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

  const title = data.title.replaceAll(' ', '-');
  if (data.tOc) {
    tOc = `## Table Of Contents is being generated ...
    please remain patient with us while we connect the nodes...`;
  };
  if (data.authorsNote) {
    footNote = `### Authors Notes: 
  _This README and accompanying repo have been brought to you by:_<br>© Sam Azimi - 2023 CodeCamp Studen.<br>Confidential and Proprietary. All Rights Reserved.`;
  };
  return `# ${title} | ${licenseLink}

## Description
${data.description}

${tOc}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
If you would like to share your feedback and/or contribute your best practices to make our code better, feel free to get in touch with us via:
  GitHub: [${data.title} - link](https://github.com/${data.gitHub}/${title})<br>
  email: <${data.email}><br>

${footNote}
`;
}

module.exports = generateMarkdown;
