const mongoose = require("mongoose");

const YogaPoseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  benefits: [String],
  difficulty: String,
  steps: [String],
});

module.exports = YogaPoseSchema;
