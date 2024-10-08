const express = require("express");
const {
  signup,
  login,
  allUsers,
} = require("../../controllers/user/UserController");
const router = express.Router();

// All users get route
router.get("/users", allUsers);

// Signup post route

router.post("/signup", signup);

// Login post Route

router.post("/login", login);

module.exports = router;
