/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hover: '#2b2b52',
        primary:'#294887',
        icons: '#2b2b52',
        secondary: '#ed8936',
        success: '#48bb78',
        error: '#f56565',
        background: '#f7fafc',
        headerText: '#2d3748',
      },
    },
  },
  plugins: [],
};
