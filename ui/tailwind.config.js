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
  },
  plugins: [],
};
