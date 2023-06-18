/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mercor-gray': '#787486',
        'mercor-green': '#7AC555',
        'mercor-green-lite': '#8BC48A',
        'mercor-yellow': '#FFA500',
        'mercor-purple': '#5030E5',
        'mercor-purple-lite': '#E4CCFD',
        'mercor-blue': '#76A5EA',
        'mercor-red': '#D25B68',
        'mercor-red-lite': '#D8727D',
        'mercor-red-liter': '#F4D7DA'
      },
    },
  },
  plugins: [],
}

