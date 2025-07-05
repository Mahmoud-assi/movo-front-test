import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-constant-condition': 1,
      '@typescript-eslint/no-shadow': 2,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-empty-object-type': 0,
      '@typescript-eslint/consistent-type-imports': 1,
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    },
  },
])
