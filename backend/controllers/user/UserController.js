const bcrypt = require("bcryptjs");
const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

// signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if the user ALready exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    // create a new user if user in not there
    user = new User({
      name,
      email,
      password,
    });
    await user.save();
    res.status(200).json({ message: "User Registered Succesfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// login controller

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
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
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

module.exports = { signup, login };
