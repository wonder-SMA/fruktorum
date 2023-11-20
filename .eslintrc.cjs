module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 0,
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      },
    ],
  },
};
