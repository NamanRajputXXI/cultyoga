// routes/yogaPoses.js
const express = require("express");
const {
  getAllYogaPoses,
  getYogaPoseById,
} = require("../../controllers/yogaPoses/readController");
const {
  createYogaPose,
} = require("../../controllers/yogaPoses/createController");
const {
  updateYogaPose,
} = require("../../controllers/yogaPoses/updateController");

const router = express.Router();

// Route to get all yoga poses
router.get("/", getAllYogaPoses);

// Route to get single yoga pose by id
router.get("/:id", getYogaPoseById);

// Route to create a new yoga pose
router.post("/", createYogaPose);

// Route to update the yoga pose
router.put("/:id", updateYogaPose);

module.exports = router;
