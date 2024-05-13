module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-classes-per-file': 'off',
    'no-use-before-define': ['error', { classes: false }],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '_element',
          '_classes',
          '_attrs',
          '_pseudoClasses',
          '_pseudoEl',
        ],
      },
    ],
  },
  plugins: ['prettier'],
  noInlineConfig: true,
};
