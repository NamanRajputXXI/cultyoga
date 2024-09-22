const axios = require("axios");

// Replace with your data
const id = "66c1cbd7e7af57023b640f7f";
const updatedData = {
  name: "Downward Dog Pose",
  hindiName: "अधो मुख श्वानासन",
  about: [
    "The Adho Mukha Svanasana is practiced by both advanced and beginner yoga practitioners. This yoga pose gets its name from three Sanskrit words - “Adho,” meaning down, and “mukha,” meaning face. Svana means the dog, and “asana” means the position. It is an inverted gravity-reversing pose. ",

    "The downward dog pose helps fluids and blood to flow in multiple directions. It is an ideal pose for bone strengthening. The pose also stretches the hamstrings and the calf while toning the arms. It engages the entire body to the core. Adho Mukha Svanasana will open your shoulders and lengthen your spine. By practicing this yoga pose, you can get rid of neck and back pain.",
  ],
  disease: ["Back Pain", " Tendonitis", " Chronic Pelvic pain"],
  benefits: [
    "It helps in getting rid of hypertension symptoms",
    "Adho mukha svanasana is ideal for treating chronic back pain",
    "Downward dog pose is excellent for various mental health issues",
    "You can get rid of chronic pelvic pain with Adho Mumba svanasana",
    "Adho mukha svanasana is ideal for tendonitis treatment",
  ],
  difficulty: "Beginner to Intermediate ",
  steps: [
    "Bend your knees, resting your hands and your wrists on the floor underneath the shoulders.",
    "Next, push your body back using your hands while curling in your toes. Stretch your legs while lifting your hips. ",
    "Keep your head loose and move the blades of your shoulder away from the hips and ears. Your quadriceps should be engaged firmly during the practice.",
    "Now, as you place your heels on the floor, gently rotate your thighs in the inward position. The distance between your feet and hands should be in transitional and resting poses.",
    "Bend your knees and exhale slowly. Relax your body and finally go back to the initial posture.",
  ],
  images: [
    "https://cdn.pixabay.com/photo/2022/04/07/00/58/yoga-7116612_640.png",
  ],
  notFor: [
    "Don’t practice adho mukha svanasana during pregnancy",
    "You should be extra careful when practicing this pose if you suffer from high blood pressure.",
  ],
};

const updateYogaPose = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/yogaPoses/${id}`,
      updatedData
    );
    console.log("Data updated successfully:", response.data);
  } catch (error) {
    console.error("Error updating data:", error.message);
  }
};

updateYogaPose(id, updatedData);
