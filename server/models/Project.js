const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  description: String,
  techStack: [String],
  repoLink: String,
  liveLink: String
});

module.exports = mongoose.model("Project", projectSchema);