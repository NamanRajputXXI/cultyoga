const bcrypt = require("bcryptjs");
const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

// find all users controller
const allUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// signup create controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if the user ALready exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User Already Exist" });
    }

    // create a new user if user in not there
    user = new User({
      name,
      email,
      password,
    });
    await user.save();

    // Generate JWT token for the new user
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "50h",
    });

    res.status(200).json({ message: "User Registered Succesfully", token });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// login controller

const login = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
    // check if the  password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // create a jwt web token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "100h",
    });
    res.status(200).json({
      message: "Login Success",
      success: true,
      token,
      email,
      name: user.name,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

module.exports = { signup, login, allUsers };
