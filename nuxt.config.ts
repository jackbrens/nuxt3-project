// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'pathe'
import { loadEnv } from 'vite'
const envScript = process.env.npm_lifecycle_script?.split(' ')
interface VITE_ENV_CONFIG {
	VITE_API_ENV: string
	VITE_API_URL: string
	// VITE_ASYNC_URL: string
	// VITE_API_SENSORS: string
}
// @ts-ignore
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG
// console.log(envData)
export default defineNuxtConfig({
	// 把env放入这个里面，通过useRuntimeConfig获取
	publicRuntimeConfig: envData,
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
