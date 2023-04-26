const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const content = [
  join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
  ...createGlobPatternsForDependencies(__dirname),
];

module.exports = {
  content,
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
