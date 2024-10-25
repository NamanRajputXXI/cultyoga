const mongoose = require("mongoose");

const DiseaseSchema = require("../schemas/YogaPoseSchema");

const Disease = mongoose.model("Disease", DiseaseSchema);

module.exports = Disease;
