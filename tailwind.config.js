/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./blog/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
};
