const Disease = require("../../models/DiseaseModel");

const updateDisease = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updateDisease = await Disease.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateDisease) {
      return res.status(404).status({
        message: "Disease not found",
      });
    }
    res.json(updateDisease);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { updateDisease };
