import { hash } from 'ohash'
import { checkStatus } from '@/api/helper/checkStatus'
import { getToken } from '@/api/user'

// 后端返回的数据类型
export interface ResOptions<T> {
	code?: number
	data?: T
	msg?: string
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = (url: string, options?: any, headers?: any): Promise<any> => {
	const {
		public: { baseUrl },
	} = useRuntimeConfig()

	const reqUrl = baseUrl + url // 你的接口地址
	// 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
	const key = hash(JSON.stringify(options) + url)

	// 可以设置默认headers例如
	const customHeaders = { token: getToken(), ...headers }

	return new Promise((resolve, reject) => {
		useFetch(reqUrl, { ...options, key, headers: customHeaders })
			.then(({ data, error, refresh }) => {
				refresh()
				if (error.value) {
					reject(error.value)
					return
				}
				const dataValue: any = data.value

				// 请求成功 200
				if (dataValue && dataValue.code === 200) {
					resolve(dataValue)
				} else {
					// 请求失败
					const e = {
						code: dataValue?.code,
					}
					checkStatus(e.code as number)
				}
			})
			.catch((err: any) => {
				reject(err)
			})
	})
}

export default new (class Http {
	get(url: string, params?: any, headers?: any): Promise<any> {
		return fetch(url, { method: 'get', params }, headers)
	}

	post(url: string, body?: any, headers?: any): Promise<any> {
		return fetch(url, { method: 'post', body }, headers)
	}

	put(url: string, body?: any, headers?: any): Promise<any> {
		return fetch(url, { method: 'put', body }, headers)
	}

	delete(url: string, body?: any, headers?: any): Promise<any> {
		return fetch(url, { method: 'delete', body }, headers)
	}
})()

// // 接口统一返回类型
// export interface HttpResponse<T = unknown> {
// 	code?: number
// 	msg?: string
// 	token?: string
// 	data?: T
// }
//
// // 请求体拓展
// function configOptions(options: any = {}) {
// 	// options.lazy = true
// 	// options.server = false
// 	options.headers = {
// 		token: getToken(), // 例子（随便填的）
// 		'Content-Type': 'application/json',
// 	}
// 	return options
// }
//
// const fetch = (url: string, options?: any): Promise<any> => {
// 	const {
// 		public: { baseUrl },
// 	} = useRuntimeConfig()
// 	const reqUrl = baseUrl + url
//
// 	const _options = configOptions(options)
//
// 	return new Promise((resolve, reject) => {
// 		useFetch(reqUrl, { ..._options })
// 			.then(({ data, error }) => {
// 				// // 强制刷新数据
// 				// refresh()
// 				if (error.value) {
// 					reject(error.value)
// 					return
// 				}
// 				console.log(data)
// 				const dataValue: any = data.value
//
// 				// 请求成功 200
// 				if (dataValue && dataValue.code === 200) {
// 					resolve(dataValue)
// 				} else {
// 					// 请求失败
// 					const e = {
// 						code: dataValue?.code,
// 					}
// 					checkStatus(e.code as number)
// 				}
// 			})
// 			.catch((err: any) => {
// 				reject(err)
// 			})
// 	})
// }
//
// class Http {
// 	get<T>(url: string, params: any = {}): Promise<HttpResponse<T>> {
// 		return fetch(url, { method: 'get', params })
// 	}
//
// 	post<T>(url: string, body?: any): Promise<HttpResponse<T>> {
// 		return fetch(url, { method: 'post', body })
// 	}
//
// 	put<T>(url: string, body?: any): Promise<HttpResponse<T>> {
// 		return fetch(url, { method: 'put', body })
// 	}
//
// 	delete<T>(url: string, body?: any): Promise<HttpResponse<T>> {
// 		return fetch(url, { method: 'delete', body })
// 	}
// }
//
// export default new Http()
