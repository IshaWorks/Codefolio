const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  bio: String,
  email: String,
  password: String,
  templateId: {
    type: String,
    default: "minimal"
  }
});

module.exports = mongoose.model("User", userSchema);