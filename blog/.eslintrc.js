module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    // 다른 config를 사용하더라도 prettier를 맨 마지막에 넣어야 모든 중복 규칙을 비활성화 시킬 수 있다.
    'prettier/react',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
};
