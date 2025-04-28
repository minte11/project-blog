import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import unicornPlugin from 'eslint-plugin-unicorn';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import perfectionistPlugin from 'eslint-plugin-perfectionist';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                node: true,
                jest: true,
            },
        },
        plugins: {
            '@next/next': nextPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'testing-library': testingLibraryPlugin,
            'jest-dom': jestDomPlugin,
            unicorn: unicornPlugin,
            sonarjs: sonarjsPlugin,
            perfectionist: perfectionistPlugin,
        },
        rules: {
            'semi': 'error',
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'no-multi-spaces': 'error',
            'no-trailing-spaces': 'error',
            'no-whitespace-before-property': 'error',
            'newline-per-chained-call': ['error'],
            'lines-between-class-members': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-multi-str': 'error',
            'no-prototype-builtins': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];