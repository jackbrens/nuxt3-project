import Http from '../utils/request'
import { Login } from './interface'

export const getRecommend = () => {
	return Http.get('/article/list')
}

/**
 *
 * @param {Login.ReqLoginForm} data - 用户账号和密码
 * @returns {object}
 */
export const login = (data: Login.ReqLoginForm) => {
	return Http.post('/user/login', data)
}

export const setToken = (token: string) => {
	return window.localStorage.setItem('success-token', token)
}

export const getToken = () => {
	return window.localStorage.getItem('success-token')
}

export const removeToken = () => {
	return window.localStorage.removeItem('success_token')
}
