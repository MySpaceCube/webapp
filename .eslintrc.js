module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'eslint:recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'vue'
  ],
  rules: {
    eqeqeq: 2,
    quotes: ['error', 'single'],
    'no-useless-constructor': 2,
    'no-useless-concat': 2,
    'no-useless-computed-key': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'arrow-parens': 2,
    'block-spacing': 2,
    indent: ['error', 2],
    'linebreak-style': 2,
    semi: [2, 'always'],
    '@typescript-eslint/semi': 'warn'
  }
};
