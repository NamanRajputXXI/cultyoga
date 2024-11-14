const Disease = require("../../models/DiseaseModel");
const MinorDiseases = require("../../models/MinorDisease");

// Get all diseases
const getAllDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    console.error("Error fetching diseases:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get disease by Id
const getDiseaseById = async (req, res) => {
  const { id } = req.params;
  try {
    const diseaseId = await Disease.findById(id);
    if (!diseaseId) {
      res.status(404).json({ message: "Disease not found" });
    }
    res.send(diseaseId);
  } catch (err) {
    console.error("Error fetching diseases:", error);

    res.status(500).json({ message: err.message });
  }
};

const getAllMinorDiseases = async (req, res) => {
  try {
    const minorDiseases = await MinorDiseases.find();
    res.json(minorDiseases);
  } catch (error) {
    console.error("Error fetching diseases:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get disease by disease name
module.exports = { getDiseaseById, getAllDiseases, getAllMinorDiseases };
