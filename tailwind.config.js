module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
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
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
