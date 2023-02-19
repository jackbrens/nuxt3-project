// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'pathe'
import { loadEnv } from 'vite'

export default defineNuxtConfig({
	runtimeConfig: {
		// 运行时常量
		public: {
			// 客户端-服务的都能访问
			baseUrl: loadEnv(process.argv[process.argv.length - 1], './env').VITE_API_URL,
		},
	},
	modules: ['@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as *;', // 注意文件路径要配成自己的
				},
			},
		},
	},
	css: ['element-plus/dist/index.css', 'assets/styles/index.scss'],
	alias: {
		'@': resolve(__dirname, './'),
	},
})
