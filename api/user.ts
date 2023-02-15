import { Login } from './interface'
import Http from '@/utils/http'

export const getRecommend = (timestamp?: number) => {
	return Http.get('/article/list')
}

/**
 *
 * @param {Login.ReqLoginForm} data - 用户账号和密码
 * @returns {object}
 */
export const login = (data: Login.ReqLoginForm) => {
	return Http.post('https://juejin.cn/passport/web/user/login?account_sdk_source=web', {
		account: 3437343434,
		password: 34343434343434,
		captcha: '',
		aid: 2608,
		is_sso: false,
		host: '',
		mix_mode: 1,
	})
	// return {
	// 	token: randomToken(),
	// 	code: 200,
	// 	error_massage: 'success',
	// }
}

// 生成随机token
// const randomToken = () => {
// 	let token = ''
// 	for (let i = 1; i <= 32; i++) {
// 		const n = Math.floor(Math.random() * 16.0).toString(16)
// 		token += n
// 	}
// 	return token
// }

export const setToken = (token: string) => {
	window.localStorage.setItem('success_token', token)
}

export const getToken = () => {
	window.localStorage.getItem('success_token')
}

export const removeToken = () => {
	window.localStorage.removeItem('success_token')
}
