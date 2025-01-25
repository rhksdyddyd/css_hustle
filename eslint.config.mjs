import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettier,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
      // 추가할 rule이 있으면 이곳에
    },
  }),
  {
    ignores: ['node_modules'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },

    plugins: {
      prettier: pluginPrettier,
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 80,
          arrowParens: 'avoid',
          endOfLine: 'lf',
        },
      ],
    },
  }
);
