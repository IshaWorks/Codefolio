const Project = require("../models/Project");

const addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.json({ message: "Project added", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.params.userId });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProject, getProjects };