/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4C409',
          50: '#F4C40910',
          100: '#F4C40920',
          500: '#F4C409',
          600: '#F4C409',
          700: '#F4C409',
        },
        secondary: {
          DEFAULT: '#060606',
          500: '#060606',
        },
      },
    },
  },
  plugins: [],
};