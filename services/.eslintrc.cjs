module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
        plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
        importOrderParserPlugins: ['typescript', 'importAssertions'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
