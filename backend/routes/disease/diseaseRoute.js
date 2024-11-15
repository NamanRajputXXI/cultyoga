const express = require("express");
const {
  createDisease,
  createMinorDisease,
  createMajorDisease,
} = require("../../controllers/disease/createController");
const {
  getAllDiseases,
  getDiseaseById,
  getAllMinorDiseases,
  getMinorDiseaseById,
  getMinorDiseaseByName,
  getDiseaseByName,
  getAllMajorDisease,
  getMajorDiseaseById,
  getMajorDiseaseByName,
} = require("../../controllers/disease/readController");
const {
  updateDisease,
  updateMinorDiseaseById,
  updateMajorDiseaseById,
} = require("../../controllers/disease/updateController");
const {
  deleteDiseaseById,
  deleteMinorDiseaseByID,
  deleteMajorDiseaseByID,
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

// Delete router for the minor Disease
router.delete("/minorDisease/:id", deleteMinorDiseaseByID);

// update router of the minor Disease
router.put("/minorDisease/:id", updateMinorDiseaseById);

// Routes for the major Disease

// get all data from get route for major disease
router.get("/majorDisease", getAllMajorDisease);

// get major disease data by id
router.get("/majorDisease/:id", getMajorDiseaseById);

// get major Disease data by name
router.get("/majorDiseasebyname/:name", getMajorDiseaseByName);
// Post route for the major Disease
router.post("/majorDisease", createMajorDisease);

// Delete router for the major Disease
router.delete("/majorDisease/:id", deleteMajorDiseaseByID);

// update router of the major Disease
router.put("/majorDisease/:id", updateMajorDiseaseById);

module.exports = router;
