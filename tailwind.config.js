const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ['Fira Code'],
        markdown: [
          'Roboto',
          '"Open Sans"',
          'Montserrat',
          'sans-serif',
          'cursive',
        ],
        space: ['Space Grotesk', 'sans-serif'],
        roboto: [
          'Roboto',
          '"Open Sans"',
          'Montserrat',
          'sans-serif',
          'cursive',
        ],
      },
      maxWidth: {
        post: '675px',
      },
      colors: {
        primary: '#007B79',
        twitter: '#30A1F2',
        github: '#24292E',
        dev: '#e2e2e2',
        teal: colors.teal
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderRadius: ['hover']
  },
  plugins: [],
};
