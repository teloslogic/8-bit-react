import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  {
    ignores: [
      'public',
      'dist',
      'coverage',
      'node_modules'
  ]
},
{
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended
  ],
  files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      globals: globals.browser,
      sourceType: 'module'
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      prettier
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-alert': 'error',
      'simple-import-sort/imports': 'error',
      'no-console': [
        'error',
        {
          allow: ['log']
        }
      ],
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-irregular-whitespace': 'error',
      //'no-magic-numbers': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-proto': 'error',
      'no-unexpected-multiline': 'error',
      'no-use-before-define': 'off',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
  },
)
