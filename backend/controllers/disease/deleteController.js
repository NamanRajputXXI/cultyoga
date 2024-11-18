const Disease = require("../../models/DiseaseModel");
const MajorDisease = require("../../models/MajorDisease");
const MinorDisease = require("../../models/MinorDisease");

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

// Delete controller for Minor Disease
const deleteMinorDiseaseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMinorDisease = await MinorDisease.findByIdAndDelete(id);
    if (!deleteMinorDisease) {
      return res.status(404).json({ message: " Minor Disease not found" });
    }
    res.status(200).json({
      message: "Minor Disease deleted Succesfully",
      deleteMinorDisease,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delelte controller for Major Disease
const deleteMajorDiseaseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMajorDisease = await MajorDisease.findByIdAndDelete(id);
    if (!deleteMajorDisease) {
      return res.status(404).json({ message: " major Disease not found" });
    }
    res
      .status(200)
      .json({
        message: "Major Disease deleted successfully",
        deleteMajorDisease,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteDiseaseById,
  deleteMinorDiseaseByID,
  deleteMajorDiseaseByID,
};
