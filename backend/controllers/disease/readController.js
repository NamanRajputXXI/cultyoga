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
    console.error("Error fetching diseases:", err);

    res.status(500).json({ message: err.message });
  }
};

// Get disease by name
const getDiseaseByName = async (req, res) => {
  const { name } = req.params;
  try {
    const diseaseByName = await Disease.findOne({ name: name });
    if (!diseaseByName) {
      res.status(404).json({ message: "Disease not found" });
    }
    res.status(200).json(diseaseByName);
  } catch (err) {
    console.log("Error Fetching Disease by name:", err);
    res.status(500).json({ message: err.message });
  }
};

// read controllers for minor Diseases
const getAllMinorDiseases = async (req, res) => {
  try {
    const minorDiseases = await MinorDiseases.find();
    res.json(minorDiseases);
  } catch (error) {
    console.error("Error fetching diseases:", error);
    res.status(500).json({ message: error.message });
  }
};

const getMinorDiseaseById = async (req, res) => {
  const { id } = req.params;
  try {
    const minorDiseaseId = await MinorDiseases.findById(id);
    if (!minorDiseaseId) {
      res.status(404).json({ message: "Minor Disease not found" });
    }
    res.send(minorDiseaseId);
  } catch (err) {
    console.error("Error fetching diseases by Id:", err);
    res.status(500).json({ message: err.message });
  }
};
const getMinorDiseaseByName = async (req, res) => {
  const { name } = req.params; // Get the name from the URL params

  try {
    // Find the minor disease by name (not by ID)
    const minorDisease = await MinorDiseases.findOne({ name: name });

    if (!minorDisease) {
      return res.status(404).json({ message: "Minor Disease not found" });
    }
    res.status(200).json(minorDisease); // Return the disease details
  } catch (err) {
    console.log("Error Fetching Minor Disease by name:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get disease by disease name
module.exports = {
  getDiseaseById,
  getAllDiseases,
  getDiseaseByName,
  getAllMinorDiseases,
  getMinorDiseaseById,
  getMinorDiseaseByName,
};
