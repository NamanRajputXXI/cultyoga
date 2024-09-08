// routes/yogaPoses.js
const express = require("express");
const {
  getAllYogaPoses,
  createYogaPose,
} = require("../../controllers/yogaPoses/yogaPoseController");

const router = express.Router();

// Route to get all yoga poses
router.get("/", getAllYogaPoses);

// Route to create a new yoga pose
router.post("/", createYogaPose);

module.exports = router;
