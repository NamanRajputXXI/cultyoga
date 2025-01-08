const mongoose = require("mongoose");

const MajorDiseaseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  images: [{ type: String }],
  about: { type: String, required: true },
  symptoms: [{ type: String }],
  causes: [{ type: String }],
  poses: [
    {
      poseName: { type: String, required: true },
      description: { type: String },
      duration: { type: String },
      difficulty: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
      },
      benefits: [{ type: String }],
      images: [{ type: String }],
      videoUrl: { type: String },
    },
  ],
  precautions: [{ type: String }],
  dietarySuggestions: [{ type: String }],
  lifestyleChanges: [{ type: String }],
  additionalTips: { type: String },
});

module.exports = MajorDiseaseSchema;
