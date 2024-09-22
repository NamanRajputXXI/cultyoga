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

// controller to get single yoga pose by its id
const getYogaPoseById = async (req, res) => {
  const { id } = req.params;
  try {
    const yogaPoseById = await YogaPose.findById(id);
    if (!yogaPoseById) {
      res.status(404).json({ message: "Yoga pose not found" });
    }
    res.send(yogaPoseById);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllYogaPoses, getYogaPoseById };
