<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        mainButton: "#0F172A", // Example cyan-900 hex value
        midButton: "#F97316", // Example orange-800 hex value
        smallButton: "#EF4444", // Example red-500 hex value
      },
    },
=======
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file types and structure
  ],
  theme: {
    extend: {},
>>>>>>> e553ee305e9ccec90ccd3438da31f5bdb75df149
  },
  plugins: [],
};
