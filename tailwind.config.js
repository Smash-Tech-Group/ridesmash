/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        // DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.3)',
        // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        //   inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        //   none: 'none',
      },
      colors: {
        "primary": "#020066",
        "secondary": "#01FFFF",
        "tertiary": "#151513",
        "regular": "#707070"
      },
      screens: {
        '1xl': '1280px',
        '2xl': '1440px',
      },
      maxWidth: {
        'screen-2xl': '1440px',
        'screen-1xl': '1280px',
      },
      lineHeight: {
        'extra-tight': '1.1px',
        'extra-loose': '2.5px',
      },
      fontFamily: {
        euclid: ['"Euclid Circular B"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.body-fixed': {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          overflow: 'hidden',
        },
      });
    },
  ],
}

