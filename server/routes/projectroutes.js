const express = require("express");
const router = express.Router();

const { addProject, getProjects } = require("../controllers/projectcontrollers");


router.post("/", addProject);
router.get("/:userId", getProjects);

module.exports = router;