const express = require("express");
const {
  signup,
  login,
  allUsers,
} = require("../../controllers/user/UserController");
const {
  loginValidation,
  signupValidation,
} = require("../../middleware/AuthValidation");
const ensureAuthenticated = require("../../middleware/AuthenticationCheck");
const router = express.Router();

// All users get route
router.get("/users", allUsers);

// Signup post route

router.post("/signup", signupValidation, signup);

// Login post Route

router.post("/login", loginValidation, login);

// Protection route
router.get("/protected", ensureAuthenticated, (req, res) => {
  res.json({
    message: "You have access to this protected route!",
    user: req.user, // Access the decoded JWT payload
  });
});

module.exports = router;
