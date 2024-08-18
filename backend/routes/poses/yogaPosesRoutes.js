// routes/yogaPoses.js
const express = require("express");
const YogaPose = require("../../models/YogaPoseModel");

const router = express.Router();

// Route to get all yoga poses
router.get("/", async (req, res) => {
  try {
    const yogaPoses = await YogaPose.find();
    res.json(yogaPoses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new yoga pose
router.post("/", async (req, res) => {
  const yogaPose = new YogaPose({
    name: req.body.name,
    benefits: req.body.benefits,
    difficulty: req.body.difficulty,
    steps: req.body.steps,
  });

  try {
    const newYogaPose = await yogaPose.save();
    res.status(201).json(newYogaPose);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
