const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["Roboto", "Helvetica Neue", "sans-serif", ...fontFamily.sans],
    },
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
    },
    // TODO: Add material color palette
    colors: {
      'button-ripple': 'var(--mat-protected-button-ripple-color)',
    }
  },
  plugins: [],
};
