// models/YogaPose.js
const mongoose = require("mongoose");

const YogaPoseSchema = require("../schemas/YogaPoseSchema");

const YogaPose = mongoose.model("YogaPose", YogaPoseSchema);

module.exports = YogaPose;

//! later on we will move to this type of model.
// const mongoose = require("mongoose");

// const YogaPoseSchema = new mongoose.Schema({
//   pose: {
//     name: { type: String, required: true },
//     sanskrit: { type: String, required: true },
//     english: { type: String, required: true },
//     aliases: [String],
//   },
//   category: [String],
//   description: { type: String, required: true },
//   benefits: [
//     {
//       benefit: { type: String, required: true },
//       description: { type: String, required: true },
//     },
//   ],
//   steps: [
//     {
//       order: { type: Number, required: true },
//       instruction: { type: String, required: true },
//       tip: String,
//     },
//   ],
//   media: {
//     images: [
//       {
//         url: { type: String, required: true },
//         alt: { type: String, required: true },
//         type: { type: String, enum: ["primary", "secondary"] },
//       },
//     ],
//     videos: [
//       {
//         url: { type: String, required: true },
//         title: { type: String, required: true },
//         duration: String,
//       },
//     ],
//   },
//   precautions: {
//     contraindications: [String],
//     cautions: [String],
//   },
//   modifications: [
//     {
//       description: { type: String, required: true },
//       forCondition: String,
//     },
//   ],
//   relatedPoses: [
//     {
//       name: { type: String, required: true },
//       english: { type: String, required: true },
//       relationship: String,
//     },
//   ],
//   difficultyLevel: { type: Number, min: 1, max: 5 },
//   durationInSeconds: Number,
//   chakraAssociation: String,
//   tags: [String],
// });

// module.exports = mongoose.model("YogaPose", YogaPoseSchema);
