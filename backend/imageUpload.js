// imageUpload.js
require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const random = uuidv4();
    cb(null, random + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Cloudinary upload function
async function uploadToCloudinary(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    fs.unlink(filePath, (err) => {
      if (err) console.log("Error deleting file:", err);
    });
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}

module.exports = { upload, uploadToCloudinary };
