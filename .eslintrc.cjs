module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte', '@typescript-eslint', "eslint-plugin-no-jp"],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
	settings: {
		'svelte/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		"no-jp/no-jp-identifier": 2,
		"no-jp/no-jp-comment": 2
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
