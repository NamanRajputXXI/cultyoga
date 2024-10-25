const Disease = require("../../models/DiseaseModel");

const deleteDiseaseById = async (req, res) => {
  const { id } = req.params; // Get the disease ID from request parameters

  try {
    const deletedDisease = await Disease.findByIdAndDelete(id);

    if (!deletedDisease) {
      return res.status(404).json({ message: "Disease not found" });
    }

    res.json({ message: "Disease deleted successfully", deletedDisease });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteDiseaseById };
