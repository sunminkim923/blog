/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.{html,js,tsx}',
    './src/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
