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
 * 通过 id 获取文章详情
 * @param article_id
 * @returns {Promise}
 */
export const getArticleDetail = (article_id: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		useFetch('https://api.juejin.cn/content_api/v1/article/detail', {
			method: 'post',
			body: {
				article_id,
			},
		})
			.then(({ data, error }) => {
				if (error.value) {
					reject(error.value)
					return
				}
				resolve(data.value)
			})
			.catch((err: any) => {
				reject(err)
			})
	})
}

// 获取类别摘要
export const getCategoryBriefs = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		useFetch('https://api.juejin.cn/tag_api/v1/query_category_briefs', {
			method: 'get',
		})
			.then(({ data, error }) => {
				if (error.value) {
					reject(error.value)
					return
				}
				resolve(data.value)
			})
			.catch((err: ErrorEvent) => {
				reject(err)
			})
	})
}

// 获取沸点分类
export const getPinsBriefs = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		useFetch('https://api.juejin.cn/tag_api/v1/query_category_briefs', {
			method: 'get',
		})
			.then(({ data, error }) => {
				if (error.value) {
					reject(error.value)
					return
				}
				resolve(data.value)
			})
			.catch((err: ErrorEvent) => {
				reject(err)
			})
	})
}

export const getShortMsg = (tag: string, sort_type: number): Promise<any> => {
	return new Promise((resolve, reject) => {
		useFetch(`https://api.juejin.cn/recommend_api/v1/short_msg/${tag}`, {
			method: 'post',
			body: {
				cursor: '0',
				id_type: 4,
				limit: 20,
				sort_type,
			},
		})
			.then(({ data, error }) => {
				if (error.value) {
					reject(error.value)
					return
				}
				resolve(data.value)
			})
			.catch((err: ErrorEvent) => {
				reject(err)
			})
	})
}

/**
 * 登录接口
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
