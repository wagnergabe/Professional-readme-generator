
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = "";

    if (license === "null") {
        return badge;
    }
};

//!!!Call this at the end of the question prompts to generage a badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var l
    }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Project Title
    ${data.title}
    ${data.description}n\
    # Table of Contents
    *[Installation](#-Installation)

    # Installation
    ${data.installation}
    `
}


module.exports = generateMarkdown;