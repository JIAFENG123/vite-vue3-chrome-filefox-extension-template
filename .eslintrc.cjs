module.exports = {
  env: {
    webextensions: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 0,
    'vue/multi-word-component-names': 'off',
    'no-unref': 'off',
    'no-undef': 'off',
    'no-multiple-empty-lines': [2, { //空行最多不能超过2行
      'max': 2
    }],
    '@typescript-eslint/no-explicit-any': 0,
    "vue/script-indent": ["error", 2, { "baseIndent": 1, switchCase: 1, }], //vue script 缩进
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }], // for循环允许使用i++
    'vue/script-setup-uses-vars': 'error',
  },
}