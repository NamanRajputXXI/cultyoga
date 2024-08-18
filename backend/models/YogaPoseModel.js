// models/YogaPose.js
const mongoose = require("mongoose");

const YogaPoseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  benefits: [String],
  difficulty: String,
  steps: [String],
});

const YogaPose = mongoose.model("YogaPose", YogaPoseSchema);

module.exports = YogaPose;
