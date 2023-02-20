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

		// 关闭非驼峰命名法提示错误
		camelcase: 0,

		// 末尾不要分号
		semi: 2,

		// 单引号
		quotes: 2,

		// 不使用 var 声明变量
		'no-var': 2,
		'lines-around-comment': [
			2,
			{
				beforeBlockComment: true, // 块注释之前空行
				beforeLineComment: true, // 行注释之前空行
				allowBlockStart: true, // 允许注释出现在块语句的开始位置
				allowObjectStart: true, // 允许注释出现在对象字面量的开始位置
				allowArrayStart: true, // 允许注释出现在数组字面量的开始位置
				allowClassStart: true, // 允许注释出现在类的开始位置
				ignorePattern: '#',
			},
		],

		// 强制数组方括号中使用一致的空格
		'array-bracket-spacing': 2,

		// 强制对象中使用一致的空格
		'object-curly-spacing': 2,
	},
}
