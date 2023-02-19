/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2023-02-19 01:39:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-02-19 02:24:33
 */
import { defineStore } from 'pinia'
import piniaPersistConfig from '@/utils/piniaPersist'

export const GlobalStore = defineStore({
	id: 'GlobalStore',
	state: () => ({
		// 用户信息
		userInfo: '',
	}),
	getters: {
		// 获取用户信息
		getUserInfo: (state) => state.userInfo,
	},
	actions: {
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo
		},
	},
	persist: piniaPersistConfig('GlobalStore'),
})
