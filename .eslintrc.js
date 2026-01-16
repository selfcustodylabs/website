module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React
    'react/prop-types': 'off', // Using JSDoc instead
    'react/react-in-jsx-scope': 'off', // Not needed in React 18+
    'react/no-unescaped-entities': 'off', // Allow quotes in JSX text
    
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // General
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'error',
    
    // Consistency
    'prefer-const': 'error',
    'no-var': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    '.docusaurus/',
    '*.min.js',
  ],
};
