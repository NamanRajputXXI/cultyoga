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

module.exports = { getAllYogaPoses };
