const axios = require("axios");

// Replace with your data for a new yoga pose
const newYogaPose = {
  name: "nk",
  email: "naman45@gmail.com",
  password: "57hfjanfjkaf",
};

const createYogaPose = async (newYogaPose) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/signup`,
      newYogaPose
    );
    console.log("Data created successfully:", response.data);
  } catch (error) {
    console.error("Error creating data:", error.message);
  }
};

createYogaPose(newYogaPose);
