import { Login } from './interface'
import { useHttpGet, useHttpPost } from './request'

export const getRecommend = () => {
	return useHttpGet('/article/list')
}

/**
 *
 * @param {Login.ReqLoginForm} data - 用户账号和密码
 * @returns {object}
 */
export const login = (data: Login.ReqLoginForm) => {
	return useHttpPost('/user/login', data)
}

export const setToken = (token: string) => {
	window.localStorage.setItem('success_token', token)
}

export const getToken = () => {
	window.localStorage.getItem('success_token')
}

export const removeToken = () => {
	window.localStorage.removeItem('success_token')
}
