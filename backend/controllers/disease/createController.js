const Disease = require("../../models/DiseaseModel");

const createDisease = async (req, res) => {
  const diseases = new Disease({
    name: req.body.name,
    about: req.body.about,
    hindiName: req.body.hindiName,
    yogaPoses: req.body.disease,
    benefits: req.body.benefits,
    difficulty: req.body.difficulty,
    steps: req.body.steps,
    images: req.body.images,
    notFor: req.body.notFor,
  });
  try {
    const newDisease = await diseases.save();
    res.status(201).json(newDisease);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = { createDisease };
