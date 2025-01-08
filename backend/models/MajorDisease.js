const mongoose = require("mongoose");

const MajorDiseaseSchema = require("../schemas/MajorDiseaseSchema");

const MajorDisease = mongoose.model("MajorDisease", MajorDiseaseSchema);

module.exports = MajorDisease;
