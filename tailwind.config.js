/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./dist/*.{html,js}"], // Specify the files to be analyzed for purging unused CSS classes
  theme: {
    extend: {
      colors: {
        customOrange: "#E1B168",
        btnColor: "#4353FF",
      },
      fontFamily: {
        sanss: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
