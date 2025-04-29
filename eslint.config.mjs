import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,mjs}'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'@next/next': nextPlugin,
			import: importPlugin,
			'jsx-a11y': jsxA11yPlugin,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				React: 'readonly',
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'semi': 'error',
			'object-curly-spacing': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-multi-spaces': 'error',
			'no-trailing-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'newline-per-chained-call': ['error'],
			'lines-between-class-members': ['error', 'always'],
			'quotes': ['error', 'single', { 'avoidEscape': true }],
			'no-multi-str': 'error',
			'no-prototype-builtins': 'off',

			'padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: ['multiline-block-like', 'multiline-const', 'multiline-let', 'multiline-expression'],
					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',
					next: ['multiline-block-like', 'multiline-const', 'multiline-let', 'multiline-expression'],
				},
			],

			'space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'ignore',
			}],

			'comma-style': ['error', 'last'],

			'max-len': ['error', {
				code: 120,
				ignoreStrings: true,
			}],
			'react/no-unescaped-entities': 'off',
			'multiline-comment-style': 'off',
			'operator-linebreak': ['error', 'before'],
			'rest-spread-spacing': ['error', 'never'],
			'array-bracket-spacing': ['error', 'never'],
			'space-in-parens': ['error', 'never'],
			'space-before-blocks': 'error',
			'keyword-spacing': 'error',
			'curly': 'error',
			'no-multiple-empty-lines': ['error', {
				max: 1,
				maxEOF: 0,
			}],
			'space-infix-ops': 'error',
			'max-depth': ['error', 3],
			'brace-style': ['error', '1tbs', { allowSingleLine: false }],
			'arrow-spacing': 'error',
			'no-template-curly-in-string': 'error',
			'block-scoped-var': 'error',
			'eqeqeq': 'error',
			'no-implicit-globals': 'error',
			'no-script-url': 'error',
			'no-self-compare': 'error',
			'no-sequences': 'error',
			'yoda': 'error',
			'computed-property-spacing': ['error', 'never'],
			'func-call-spacing': ['error', 'never'],
			'jsx-quotes': ['error', 'prefer-double'],
			'max-statements-per-line': ['error', { max: 1 }],
			'no-multi-assign': 'error',
			'padded-blocks': ['error', 'never'],
			'no-duplicate-imports': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'react/display-name': 'off',

			'lines-around-comment': ['error', {
				beforeLineComment: true,
				allowBlockStart: true,
			}],
			'no-else-return': ['error', { allowElseIf: false }],
			'key-spacing': ['error', {
				beforeColon: false,
				afterColon: true,
			}],
			'comma-spacing': ['error', {
				before: false,
				after: true,
			}],

			'react/jsx-boolean-value': 'error',
			'react/jsx-tag-spacing': ['error', {
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'allow',
			}],
			'react/jsx-pascal-case': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-max-props-per-line': ['error', {
				maximum: {
					single: 2,
					multi: 1,
				},
			}],

			'react/jsx-wrap-multilines': ['error', {
				return: 'parens-new-line',
				assignment: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				declaration: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			}],

			'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
			'react/jsx-newline': ['error', {
				prevent: true,
				allowMultilines: true,
			}],
			'object-property-newline': 'error',

			'react/jsx-props-no-multi-spaces': 'error',
			'react/jsx-props-no-spreading': 'off',
			'react/jsx-indent': ['error', 'tab', {
				indentLogicalExpressions: true,
				checkAttributes: true,
			}],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-fragments': ['error', 'syntax'],
			'react/jsx-curly-newline': ['error', {
				multiline: 'consistent',
				singleline: 'consistent',
			}],
			'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
			'react/jsx-closing-tag-location': 'error',
			'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
			'react/function-component-definition': ['error', {
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			}],
			'react/jsx-equals-spacing': ['error', 'never'],
			'react/jsx-curly-spacing': ['error', {
				when: 'never',
				children: true,
			}],

			'object-curly-newline': ['error', {
				multiline: true,
				consistent: true,
			}],
			'react/jsx-sort-props': ['error', {
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: true,
			}],

			'indent': ['error', 'tab', {
				ignoredNodes: ['TemplateLiteral'],
			}],

			'no-unused-vars': ['warn', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
				args: 'after-used',
				caughtErrors: 'all',
			}],
			'react/jsx-uses-vars': 'error',
		},
	},
];