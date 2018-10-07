const express = require("express");
const router = express.Router();
const data = require("../data/data").projects;

router.get("/", (req, res) => {
  res.render("index", { data });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/projects/:projectId", (req, res) => {
  res.render("project", { project: data[parseInt(req.params.projectId)] });
});

module.exports = router;
