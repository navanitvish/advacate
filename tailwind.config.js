/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // Equivalent to 15
      },
      // Or you can add custom width and height
      width: {
        '15': '3.75rem', // Width
      },
      height: {
        '15': '3.75rem', // Height
      },
    },
  },
  plugins: [],
}