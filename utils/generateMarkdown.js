
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
    } else if (license === "Apache") {
        return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)`;
    } else if (license === "Mozilla") {
        return `![License: Mozilla 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    } else {
        return "";
    }
    }

//!!!Call this at the end of the question prompts to generage a badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var l
    }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {}

//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    renderLicenseBadge()
    return `
    # Project Title
    ${data.title}
    ${renderLicenseBadge(data.license)}
    ${data.description}

    ## Table of Contents
    *[Installation](#Installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Test](#test)
    *[Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Test
    ${data.test}

    #{Questions}
    Please contact at: ${data.user_email}/n
    GitHub: [${data.githubInput}](https://github.com/${data.githubInput})\n
    `
}


module.exports = generateMarkdown; renderLicenseBadge;