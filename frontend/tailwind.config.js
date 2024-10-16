/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Include all the frontend component files
      "./public/index.html",         // Include your HTML files if needed
    ],
    theme: {
      extend: {
        colors: {
          brand1: "#12F7D6",
          brand2: "#98FAEC",
          bg1: "#292F36",
          bg2: "#1A1E23",
          grey: "#43454D",
          white: "#FFFFFF",
          html: "#E54F26",
          css: "#0C7388",
          js: "#E7A020",
          react: "#28A9E0",
        },
        fontFamily: {
          sans: ['Ubuntu', 'sans-serif'],  // Example: add Ubuntu as a primary font
          mono: ['IBM Plex Mono', 'monospace'],  // Secondary font
        },
      },
    },
    plugins: [],
  }
  