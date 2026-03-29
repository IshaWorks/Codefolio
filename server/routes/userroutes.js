const express = require("express");
const router = express.Router();   // 🔥 YE LINE MISSING THI

const { registerUser,getUserProfile } = require("../controllers/usercontroller");

router.post("/register", registerUser);
router.get("/:username", getUserProfile); 

module.exports = router;