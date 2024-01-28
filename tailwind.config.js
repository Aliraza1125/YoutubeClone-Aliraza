/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Remove the explicit inclusion of @tailwindcss/line-clamp
    // require("@tailwindcss/line-clamp"),
    // other plugins...
  ],
}
