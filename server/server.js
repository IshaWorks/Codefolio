const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// 🔥 Routes import
const userRoutes = require("./routes/userroutes");
const projectRoutes = require("./routes/projectroutes");

const app = express();

// 🔥 DB connect
connectDB();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 Routes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

// 🔥 Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// 🔥 Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});