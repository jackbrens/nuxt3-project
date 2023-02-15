import { checkStatus } from '@/api/helper/checkStatus'
import { useFetch, useRuntimeConfig } from '#app'

// 接口统一返回类型
export interface HttpResponse<T = unknown> {
	code?: number
	msg?: string
	data?: T
}

// 请求体拓展
function configOptions(options: any = {}) {
	options.lazy = true
	options.server = false
	options.headers = {
		token: '!@#$%^&*(123456', // 例子（随便填的）
		'Content-Type': 'application/json',
	}
	return options
}

const fetch = (url: string, options?: any): Promise<any> => {
	const {
		public: { baseUrl },
	} = useRuntimeConfig()
	const reqUrl = baseUrl + url

	const _options = configOptions(options)
	// console.log(_options)

	return new Promise((resolve, reject) => {
		useFetch(reqUrl, { ..._options })
			.then(({ data }: any) => {
				// console.log(data)

				// 请求成功 200
				if (data.value.code === 200) {
					resolve(data.value)
				} else {
					// 请求失败
					const e = {
						code: data.value?.code,
					}
					checkStatus(e.code as number)
				}
			})
			.catch((err: any) => {
				reject(err)
			})
	})
}

class Http {
	get<T>(url: string, params: any = {}): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'get', params })
	}

	post<T>(url: string, params?: any): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'post', params })
	}

	put<T>(url: string, body?: any): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'put', body })
	}

	delete<T>(url: string, body?: any): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'delete', body })
	}
}

export default new Http()
