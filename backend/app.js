// index.js
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary");
const { v4: uuidv4 } = require("uuid");
const connectDB = require("./dbConnect");

const yogaPosesRoutes = require("./routes/poses/yogaPosesRoutes");
const userRoutes = require("./routes/user/userRoutes");
const diseaseRoutes = require("./routes/disease/diseaseRoute");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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

//  setting up  multer MIDDLEWARE file upload in cloudinary
//? will fix it later

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const random = uuidv4();
    cb(null, random + "" + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.get("/imgUpload", (req, res) => {
  res.send("upload the file using multer");
});
app.post("/imgUpload", upload.single("myFile"), async (req, res) => {
  const uploadResult = await cloudinary.uploader
    .upload(req.file.path)
    .catch((error) => {
      console.log(error);
    });
  console.log(uploadResult);
  res.send("file is uploaded");
  fs.unlink(req.file.path, (err) => {
    if (err) console.log(err);
    else console.log("File is deleted");
  });
});
// Delete uploaded files

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
