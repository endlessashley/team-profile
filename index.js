//require dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//function to be called for writing index.html file
const writeFileAsync = util.promisify(fs.writeFile);

//importing classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//variables to be populated with HTML based on inquirer input
var managerCard = ``
var engineerCard = ``
var internCard = ``

//prompt users to add team members in the command line
const prompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "addNext",
            message: "Welcome to the Team Profile Generator! What team member would you like to add first?",
            choices: ["Manager", "Engineer", "Intern", "None"],
        }
    ]).then((answers) => {
        if (answers.addNext === "Engineer") {
            addEngineer()
        }

        if (answers.addNext === "Intern") {
            addIntern()
        }

        if (answers.addNext === "Manager") {
            addManager()
        }
        if (answers.addNext === "None") {
            writeFileAsync('index.html', renderHTML()).then(console.log("index.html rendered"))
        }
    })
}


const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ]).then((answers) => {
        prompt();
        saveManager(answers)
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
        },
    ]).then((answers) => {
        prompt();
        saveEngineer(answers)
    })
}


const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
    ]).then((answers) => {
        prompt();
        saveIntern(answers)
    })
}

const saveManager = (answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    managerCard = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID Number: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + managerCard;
}

const saveEngineer = (answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    engineerCard = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID Number: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github Username: ${engineer.github}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + engineerCard;
}

const saveIntern = (answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    internCard = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID Number: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + internCard;
}

const renderHTML = () =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"> 
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Your Team:</h1>
  </div>
  </div>
  <div class = "employee-section">
  ${managerCard}
  </div>
  <div class = "employee-section">
  ${engineerCard}
  </div>
  <div class = "employee-section">
  ${internCard}
  </div>
</body>
</html>`;

prompt()