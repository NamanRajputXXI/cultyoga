const axios = require("axios");

// Replace with your data for a new yoga pose
const newYogaPose = {
  name: "Hand-to-Foot Pose",
  hindiName: "पादहस्तासन (Padahastasana)",
  about: [
    "Padahastasana, also known as Hand-to-Foot Pose, is a forward bend pose that stretches the hamstrings, calves, and back. It strengthens the core and improves flexibility. This pose can be challenging for beginners, but there are modifications to make it more accessible.",
    "The name Padahastasana comes from the Sanskrit words 'pada' meaning foot, 'hasta' meaning hand, and 'asana' meaning pose. It translates literally to 'hand-to-foot pose'.",
  ],
  disease: [
    "Tight hamstrings and calves",
    "Back pain (when done correctly)",
    "Poor posture",
  ],
  benefits: [
    "Improves flexibility in the hamstrings, calves, and back",
    "Strengthens the core muscles",
    "Improves circulation",
    "Can help to relieve stress and anxiety",
  ],
  difficulty: "Beginner (with modifications)",
  steps: [
    "Stand tall with your feet hip-width apart.",
    "Hinge at your hips and fold forward, keeping your spine long.",
    "Reach for your feet with your hands, using a strap or grabbing your shins if you can't reach your toes.",
    "Engage your core and keep your back flat. Don't hunch your shoulders.",
    "Hold the pose for 5-10 breaths, then slowly come back up to standing.",
  ],
  images: [
    "https://www.yogajournal.com/poses/extended-hand-to-big-toe-pose/image",
  ],
  notFor: [
    "Recent injuries to the hamstrings, back, or ankles",
    "High blood pressure",
    "Sciatica",
    "Pregnant women (second and third trimester)",
  ],
};

const createYogaPose = async (newYogaPose) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/yogaPoses`,
      newYogaPose
    );
    console.log("Data created successfully:", response.data);
  } catch (error) {
    console.error("Error creating data:", error.message);
  }
};

createYogaPose(newYogaPose);
