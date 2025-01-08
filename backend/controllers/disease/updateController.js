const Disease = require("../../models/DiseaseModel");
const MajorDisease = require("../../models/MajorDisease");
const MinorDisease = require("../../models/MinorDisease");

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

// update controller for the minor Disease
const updateMinorDiseaseById = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updateMinorDisease = await MinorDisease.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updateMinorDisease) {
      return res.status(404).status({
        message: "Minor Disease not found",
      });
    }
    res.json(updateMinorDisease);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update controller for the major Disease
const updateMajorDiseaseById = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updateMajorDisease = await MajorDisease.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updateMajorDisease) {
      return res.status(404).status({
        message: "Minor Disease not found",
      });
    }
    res.json(updateMajorDisease);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  updateDisease,
  updateMajorDiseaseById,
  updateMinorDiseaseById,
};
