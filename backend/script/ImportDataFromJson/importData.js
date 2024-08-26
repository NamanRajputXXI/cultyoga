const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const YogaPose = require("../../models/YogaPoseModel");
const connectDB = require("../../dbConnect");

const importData = async () => {
  try {
    await connectDB();

    // Read data from JSON file
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../poses.json"), "utf-8")
    );

    // Insert data into MongoDB
    await YogaPose.deleteMany(); // Optional: clear existing data
    await YogaPose.insertMany(data);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
