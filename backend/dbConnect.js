// databaseConnect.js
require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb atlas", mongoURI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
