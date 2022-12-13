module.exports = {
	apps: [
		{
			name: 'Nuxt3-project', // 设置启动项目名称
			exec_mode: 'cluster',
			instances: 'max',
			// 注意这里的相对路径。要访问到index.mjs就行了，如果你是整个.output一起放在服务器的话就和官方一样路径前面加一个/.output好了
			script: '/server/index.mjs',
		},
	],
}
