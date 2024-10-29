/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#081530',
        secondary : '#354a67',
      },

      fontFamily  : {
        poppins : ['poppins', 'sans-serif'],
        modak : ['Modak', 'system-ui'],
        Knewave : ['Knewave', 'system-ui'],
      }
    },
  },
  plugins: [],
}