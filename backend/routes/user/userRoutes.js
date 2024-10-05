const express = require("express");
const { signup, login } = require("../../controllers/user/UserController");
const router = express.Router();

// Signup route

router.post("/signup", signup);

// Login Route

router.post("/login", login);

module.exports = router;
