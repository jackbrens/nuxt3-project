// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as *;', // 注意文件路径要配成自己的
				},
			},
		},
	},
})
