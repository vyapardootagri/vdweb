/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}", // If you use section folders
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#facc15", // Regal Yellow
          red: "#b91c1c",     // Deep Maroon
          gold: "#d4af37",    // True Gold
          brown: "#7c3f00",   // Spice Brown
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"], // Optional for regal headings
        body: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
