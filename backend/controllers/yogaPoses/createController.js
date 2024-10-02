const YogaPose = require("../../models/YogaPoseModel");

// controller to create the new yoga pose

const createYogaPose = async (req, res) => {
  const yogaPose = new YogaPose({
    name: req.body.name,
    about: req.body.about,
    hindiName: req.body.hindiName,
    disease: req.body.disease,
    benefits: req.body.benefits,
    difficulty: req.body.difficulty,
    steps: req.body.steps,
    images: req.body.images,
    notFor: req.body.notFor,
  });
  try {
    const newYogaPose = await yogaPose.save();
    res.status(201).json(newYogaPose);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { createYogaPose };
