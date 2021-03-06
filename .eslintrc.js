module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: [1, 'always'],
    'no-unused-vars': 'error',
    'no-useless-escape': 'off',
    'no-bitwise': 'off',
    'no-useless-concat': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'max-len': [1, 120],
    'no-await-in-loop': 'off',
    'no-extend-native': 'off',
    'no-loop-func': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': ['error', {
      object: true,
      array: false,
    }],
  },
};
