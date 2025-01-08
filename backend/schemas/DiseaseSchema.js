const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    about: [String],
    hindiName: String,
    yogaPoses: [String],
    benefits: [String],
    difficulty: String,
    steps: [String],
    notFor: [String],
    images: [String],
  },
  { versionKey: false } // This line excludes the _v field
);

module.exports = DiseaseSchema;
