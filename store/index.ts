import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import piniaPersistConfig from '@/utils/piniaPersist'

export const GlobalStore = defineStore({
	id: 'GlobalStore',
	state: () => ({
		// 用户信息
		userInfo: '',

		// 主题颜色
		themePrimary: Cookies.get('theme-mode') || 'light',
	}),
	getters: {
		// 获取用户信息
		getUserInfo: (state) => state.userInfo,

		// 获取主题颜色
		getThemePrimary: (state) => state.themePrimary,

		// 是否是亮色主题
		isLight: (state) => state.themePrimary === 'light',
	},
	actions: {
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo
		},

		setThemeConfig(themePrimary: string) {
			this.themePrimary = themePrimary
		},
	},
	persist: piniaPersistConfig('GlobalStore'),
})
