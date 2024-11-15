const express = require("express");
const {
  createDisease,
  createMinorDisease,
} = require("../../controllers/disease/createController");
const {
  getAllDiseases,
  getDiseaseById,
  getAllMinorDiseases,
  getMinorDiseaseById,
  getMinorDiseaseByName,
  getDiseaseByName,
} = require("../../controllers/disease/readController");
const { updateDisease } = require("../../controllers/disease/updateController");
const {
  deleteDiseaseById,
} = require("../../controllers/disease/deleteController");
const router = express.Router();

// Get routes
router.get("/diseases", getAllDiseases);
router.get("/diseases", getAllDiseases);
router.get("/diseasebyname/:name", getDiseaseByName);

// Post routes
router.post("/disease", createDisease);
// Put routes
router.put("/disease/:id", updateDisease);

// Delete routes
router.delete("/disease/:id", deleteDiseaseById);

// Routes for the minor disease
//Get route for minor Disease
router.get("/minorDisease", getAllMinorDiseases);
router.get("/minorDisease/:id", getMinorDiseaseById);
router.get("/minorDiseasebyname/:name", getMinorDiseaseByName);

// Post route for minor Disease
router.post("/minorDisease", createMinorDisease);

module.exports = router;
