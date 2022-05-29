// Use of file system to write the new mark-down component
const fs = require('fs');


// Bring in the node file object inquirer
const inquirer = require("inquirer");

// Creates the Github ReadMe Markdown
const generateMarkDown = (answer) =>

{
    const markdown=
# ${answer.username}

//This code is a command-line tool that generates an HTML page from user input.

## ${answer.location}

//The application prompts the user for information like their name, location, bio, LinkedIn URL, and Git

${answer.bio}
[LinkedIn] (${answer.LinkedIn})
[GitHub] (${answer.GitHub})

// Write the markdown to a file
fs.writeFile("ReadME.md", markdown, (err) => err ? console.error(`writing file failed: ${err}`)) : console.log('The file was successfully generated')
    
}

// prompt name, location, bio, LinkedIn URL, and GitHub URL.
inquirer.prompt([
    {
    type: 'input',
    message: 'what is your name?',
    name: 'username',
    },
    {
    type: 'input',
    message: 'what is your location?',
    name: 'location',
    },
    {
    type: 'input',
    message: 'what is your bio?',
    name: 'bio',
    },
    {
    type: 'input',
    message: 'what is your LinkedIn URL?',
    name: 'LinkedIn',
    },
    {
    type: 'input',
    message: 'what is your GitHub URL?',
    name: 'GitHub',
    },

]).then((response) =>{
    generateMarkDown(response);
}
);