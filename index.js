const inquirer = require('inquirer');
const fs = require('fs');

//Criteria Needed:
//Title of project
//sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Input method for above section
//license for the application from a list of options (li)
//license badge
//input username(Github)- added to the section of the README entitled Questions, with a link to github profile
//same with email
//links (a) to sections of README

//Video showing prompts 

inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: "What would you like to name your project?"
    }
])
