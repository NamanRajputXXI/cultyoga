const YogaPose = require("../../models/YogaPoseModel");

// update controller for the yogapose
const updateYogaPose = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedPose = await YogaPose.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedPose) {
      return res.status(404).json({ message: "Yoga pose not found" });
    }
    res.json(updatedPose);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { updateYogaPose };
