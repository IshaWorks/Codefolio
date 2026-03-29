const User = require("../models/user");
const Project = require("../models/Project"); // 👈 ADD THIS

const registerUser = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const user = new User({
      username,
      name,
      email,
      password
    });

    await user.save();

    res.json({ message: "User saved successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔥 NEW FUNCTION (IMPORTANT)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const projects = await Project.find({ userId: user._id });

    res.json({ user, projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔥 EXPORT BOTH
module.exports = { registerUser, getUserProfile };