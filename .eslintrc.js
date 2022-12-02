module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['@nuxtjs', 'plugin:vue/vue3-recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'no-undef': 0,
		'vue/multi-word-component-names': 0,
		// 末尾不要分号
		semi: 2,
		// 单引号
		quotes: 2,
		'no-var': 2,
		// 强制数组方括号中使用一致的空格
		'array-bracket-spacing': 2,
		// 强制对象中使用一致的空格
		'object-curly-spacing': 2,
	},
}
