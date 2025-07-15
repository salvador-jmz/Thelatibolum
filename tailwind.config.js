/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'neumorphic': '4px 4px 8px #c8c8c8, -4px -4px 8px #f8f8f8',
        'neumorphic-inset': 'inset 4px 4px 8px #c8c8c8, inset -4px -4px 8px #f8f8f8',
        'neumorphic-hover': '6px 6px 12px #c8c8c8, -6px -6px 12px #f8f8f8',
        'neumorphic-small': '2px 2px 4px #c8c8c8, -2px -2px 4px #f8f8f8',
      },
      colors: {
        'neuro-light': '#e0e0e0',
        'neuro-dark': '#a3a3a3',
      }
    }
  },
  plugins: [],
};
