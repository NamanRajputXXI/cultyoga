const YogaPose = require("../../models/YogaPoseModel");

// controller to get all yoga pose
const getAllYogaPoses = async (req, res) => {
  try {
    const yogaPoses = await YogaPose.find();
    res.json(yogaPoses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controller to create the new yoga pose

const createYogaPose = async (req, res) => {
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
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getAllYogaPoses, createYogaPose };
