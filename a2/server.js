/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Aditya Mahesh Tambe Student ID: 171969223 Date: 26-09-2024
*
********************************************************************************/
const express = require("express");
const projectData = require("./modules/projects");

const app = express();

// Ensure the projects array is initialized before starting the server
projectData.initialize().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(err => {
  console.error("Failed to initialize project data", err);
});

// Routes
app.get("/", (req, res) => {
  res.send("Assignment 2: Student Name: Aditya Mahesh Tambe - Student ID: 171969223");
});

app.get("/solutions/projects", (req, res) => {
  projectData.getAllProjects()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).send(err));
});

app.get("/solutions/projects/id-demo", (req, res) => {
  projectData.getProjectById(9)
    .then(project => res.json(project))
    .catch(err => res.status(404).send(err));
});

app.get("/solutions/projects/sector-demo", (req, res) => {
  projectData.getProjectsBySector("agriculture")
    .then(projects => res.json(projects))
    .catch(err => res.status(404).send(err));
});
