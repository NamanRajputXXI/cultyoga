// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./dbConnect");
const yogaPosesRoutes = require("./routes/poses/yogaPosesRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/yogaPoses", yogaPosesRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Cult Yoga API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
