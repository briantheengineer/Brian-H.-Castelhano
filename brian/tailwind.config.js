module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', 
        secondary: '#7B9A9D', 
        background: '#F8F8F8', 
        text: '#333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
