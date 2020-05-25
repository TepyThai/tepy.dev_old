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
      },
      maxWidth: {
        post: '675px',
      },
      colors: {
        primary: '#007B79',
        twitter: '#30A1F2',
        github: '#24292E',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
