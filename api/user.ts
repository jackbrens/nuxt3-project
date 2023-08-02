import Http from '../utils/request'
import { Login } from './interface'

export const getRecommend = () => {
	return Http.get('/article/list')
}

export const getRecommendAll = () => {
	return new Promise((resolve, reject) => {
		useFetch(
			'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7250374211875980839&spider=0',
			{
				method: 'post',
				body: {
					client_type: 2608,
					cursor: '0',
					id_type: 2,
					limit: 20,
					sort_type: 200,
				},
			}
		)
			.then(({ data, error, refresh }) => {
				// refresh()
				if (error.value) {
					reject(error.value)
					return
				}
				const dataValue: any = data.value
				resolve(dataValue)
			})
			.catch((err: any) => {
				reject(err)
			})
	})
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
