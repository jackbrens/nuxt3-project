import {checkStatus} from '@/api/helper/checkStatus'

const baseUrl = 'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7171816670422402593&spider=0'

// 接口统一返回类型
export interface HttpResponse {
	code?: number
	msg?: string
	data?: any
}

// 请求体拓展
function configOptions(options: any = {}) {
	options.baseURL = options.baseURL ?? baseUrl
	options.headers = {
		'token': '!@#$%^&*(123456',
		'Content-Type': 'application/json'
	}
	return options
}

const fetch = async (url: string, options?: any): Promise<any> => {
	return await useFetch<HttpResponse>(url, options).then(({ data, error }) => {
		options = configOptions(options)

		// 请求成功
		if (!error.value && data.value) {
			return data.value
		} else {
			const e = {
				code: error.value?.statusCode || data.value?.code
			}
			checkStatus(e.code as number)
		}

		// 请求失败
		if (error.value) {

			return Promise.reject(error.value)
		}
	})
}


// export interface ResOptions {
// 	data?: any
// 	code?: number
// 	msg?: string
// }
//
// const fetch = (url: string, options?: any): Promise<any> => {
//
// 	// 3.0正式版环境变量要从useRuntimeConfig里的public拿
// 	const { public: { VITE_API_HOST } } = useRuntimeConfig()
//
// 	// 你的接口地址
// 	const reqUrl = (VITE_API_HOST ?? '') + url
//
// 	// 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
// 	const key = hash(JSON.stringify(options) + url)
//
// 	console.log('获取参数=================', reqUrl, options, key)
// 	return new Promise((resolve, reject) => {
// 		useFetch(reqUrl, { ...options, key }).then(({ data, error }) => {
// 			console.log(data, error)
// 			if (error.value) {
// 				reject(error.value)
// 				return
// 			}
// 			const value: ResOptions | any = data.value
// 			console.log('useFetchResData: ', value)
// 			if (!value) {
// 				// 这里处理错你自定义的错误，例如code !== 1
// 				throw createError({
// 					statusCode: 500,
// 					statusMessage: reqUrl,
// 					message: '自己后端接口的报错信息',
// 				})
// 			} else {
// 				resolve(value)
// 			}
// 		}).catch((err: any) => {
// 			// console.log(err)
// 			reject(err)
// 		})
// 	})
// }
//

export default class Http {

	static get(url: string, query?: any): Promise<any> {
		return fetch(url, { method: 'get', query })
	}

	static post(url: string, params?: any): Promise<any>  {
		return fetch(url, { method: 'post', params })
	}

	static put(url: string, params?: any): Promise<any>  {
		return fetch(url, { method: 'put', params })
	}

	static delete(url: string, params?: any): Promise<any>  {
		return fetch(url, { method: 'delete', params })
	}
}
