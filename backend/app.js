// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./dbConnect");
const yogaPosesRoutes = require("./routes/poses/yogaPosesRoutes");
const userRoutes = require("./routes/user/userRoutes");
const diseaseRoutes = require("./routes/disease/diseaseRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/yogaposes", yogaPosesRoutes);
app.use("/api", userRoutes);
app.use("/api", diseaseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Cult Yoga API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
