import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['.next/**', 'dist/**', 'node_modules/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['error', 'warn'] }]
    },
    languageOptions: { parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } }
  }
];