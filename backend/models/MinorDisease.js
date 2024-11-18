const mongoose = require("mongoose");

const MinorDiseaseSchema = require("../schemas/MinorDiseaseSchema");

const MinorDisease = mongoose.model("MinorDisease", MinorDiseaseSchema);

module.exports = MinorDisease;
