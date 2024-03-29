const colors = require('tailwindcss/colors');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, '**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: colors.indigo,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
