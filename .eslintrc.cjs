/*eslint no-undef: off*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue'],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // enforce 2 spaces indentation
    indent: ['error', 2],

    // enforces consistent use of trailing commas in object and arrays
    'comma-dangle': ['error', 'always-multiline'],

    // enforces semicolons at the end of each statement
    semi: ['error', 'always'],

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce use of single quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // require parentheses around arrow function only needed
    'arrow-parens': ['error', 'as-needed'],
  },
};
