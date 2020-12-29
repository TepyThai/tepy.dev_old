module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
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
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
