const inquirer = require('inquirer');
const fs = require('fs');
const util = require("./utils/generateMarkdown");
const { BADSTR } = require('dns');

//Criteria Needed:
//(DONE)------Title of project 
//sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Input method for above section
//license for the application from a list of options (li)
//license badge
//input username(Github)- added to the section of the README entitled Questions, with a link to github profile
//same with email
//links (a) to sections of README

//Video showing prompts 
const questions = [];
// function writeToFile(index,data) {
inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: "What would you like to name your project?"
    },
    {
        type: 'input',
        name: "github_name",
        message: "Please provide your GitHub username"
    },
    {
        type: 'input',
        name: 'user_email',
        message: "Please supply a valid email"
    },
    {
        //https://gist.github.com/qvil/5e3ed56c26d784e51424621119cc4028? (common licenses with badges)
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
    
])
// }

// function init() {};

// init();
