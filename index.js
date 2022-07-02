const inquirer = require('inquirer');
const fs = require('fs');
const util = require("./utils/generateMarkdown");
const generateMarkdown = require('./utils/generateMarkdown');


//Criteria Needed:
//(DONE)------Title of project 
//sections entitled Description*, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Input method for above section
//(DONE)-------license for the application from a list of options (li)
//license badge
//(DONE)-------input username(Github)- added to the section of the README entitled Questions, with a link to github profile
//(DONE)------same with email
//links (a) to sections of README

//Video showing prompts 
const questions = [];
// function writeToFile(index,data) {
inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: "What would you like to name your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log ("You really should give this a title...");
                return false;
            }
        }
    },
    {  
        type: 'input',
        name: "description",
        message: "What will your project be about?"
    },
    {
        type: 'input',
        name: "usage",
        message: "How will you use your app?"
    },
    {
        type: 'input',
        name: "installation",
        message: "How will you use your app? What commands are needed to run the program?"
    },
    {
        type: 'input',
        name: "github_name",
        message: "Please provide your GitHub username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Make up a Github if you're not sure ;-)");
            }
        }
    },
    {
        type: 'input',
        name: 'user_email',
        message: "Please supply a valid email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("I promise to keep spam to a minimum....of 100 ads per day");
            }
        }
    },
    {
       //shields.io
        type: 'list',
        name: 'licenses',
        message: 'Please choose the right license for your project',
        choices: [
            "Apache",
            "MIT",
            "GPL",
            "none" 
        ]
    }
  
]).then((response) => {  
generateMarkdown(response);
console.log(response);
});

// }

// function init() {};

// init();
