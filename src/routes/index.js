const express = require("express");
const router = express.Router();
const data = require("../data/data").projects;

// root route
router.get("/", (req, res) => {
  res.render("index", { data });
});

// route for about page
router.get("/about", (req, res) => {
  res.render("about");
});

// route to display one of the selected projects
router.get("/projects/:projectId", (req, res) => {
  res.render("project", { project: data[parseInt(req.params.projectId)] });
});

module.exports = router;
