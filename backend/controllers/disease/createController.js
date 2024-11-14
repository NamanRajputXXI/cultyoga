const Disease = require("../../models/DiseaseModel");
const MinorDisease = require("../../models/MinorDisease");

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

// create controller for the minor disease
const createMinorDisease = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Name field is required",
    });
  }

  const minorDisease = new MinorDisease({
    name: req.body.name,
    image: req.body.image,
    images: req.body.images,
    about: req.body.about,
    symptoms: req.body.symptoms,
    causes: req.body.causes,
    poses: req.body.poses,
    precautions: req.body.precautions,
    dietarySuggestions: req.body.dietarySuggestions,
    lifestyleChanges: req.body.lifestyleChanges,
    additionalTips: req.body.additionalTips,
  });

  try {
    const newMinorDisease = await minorDisease.save();
    res.status(201).json(newMinorDisease);
    console.log("Data send Successfully");
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { createDisease, createMinorDisease };
