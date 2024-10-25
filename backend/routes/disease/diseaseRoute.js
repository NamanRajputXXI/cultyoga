const express = require("express");
const { createDisease } = require("../../controllers/disease/createController");
const {
  getAllDiseases,
  getDiseaseById,
} = require("../../controllers/disease/readController");
const router = express.Router();

// Get routes
router.get("/diseases", getAllDiseases);
router.get("/diseases/:id", getDiseaseById);

// Post routes
router.post("/disease", createDisease);
// Put routes

// Delete routes

module.exports = router;
