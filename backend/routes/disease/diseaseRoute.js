const express = require("express");
const { createDisease } = require("../../controllers/disease/createController");
const {
  getAllDiseases,
  getDiseaseById,
} = require("../../controllers/disease/readController");
const { updateDisease } = require("../../controllers/disease/updateController");
const {
  deleteDiseaseById,
} = require("../../controllers/disease/deleteController");
const router = express.Router();

// Get routes
router.get("/diseases", getAllDiseases);
router.get("/disease/:id", getDiseaseById);

// Post routes
router.post("/disease", createDisease);
// Put routes
router.put("/disease/:id", updateDisease);

// Delete routes
router.delete("/disease/:id", deleteDiseaseById);

module.exports = router;
