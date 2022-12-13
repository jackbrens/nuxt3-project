import { checkStatus } from '@/api/helper/checkStatus'
import { useFetch, useRuntimeConfig } from '#app'

// 接口统一返回类型
export interface HttpResponse {
	code?: number
	msg?: string
	data?: any
}

// 请求体拓展
function configOptions(options: any = {}) {
	options.lazy = true
	options.headers = {
		token: '!@#$%^&*(123456', // 例子（随便填的）
		'Content-Type': 'application/json',
	}
	return options
}

const fetch = async (url: string, options: any = {}): Promise<any> => {
	options = configOptions(options)

	// 从 useRuntimeConfig 中获取环境变量中的 url 地址
	const {
		public: { VITE_API_URL },
	} = useRuntimeConfig()
	const reqUrl = (VITE_API_URL ?? 'https://api.juejin.cn') + url

	// console.log('options====', reqUrl, options)

	return await useFetch<HttpResponse>(reqUrl, options).then(({ data, error }) => {
		// 请求成功
		if (!error.value && data.value) {
			return data.value
		} else {
			// 错误 code 收集
			const e = {
				code: error.value?.statusCode || data.value?.code,
			}
			checkStatus(e.code as number)
			return Promise.reject(e)
		}
	})
}

export default class Http {
	static get(url: string, query: any = {}): Promise<any> {
		return fetch(url, { method: 'get', query })
	}

	static post(url: string, body: any = {}, query?: any): Promise<any> {
		return fetch(url, { method: 'post', body, query })
	}

	static put(url: string, body: any = {}): Promise<any> {
		return fetch(url, { method: 'put', body })
	}

	static delete(url: string, body: any = {}): Promise<any> {
		return fetch(url, { method: 'delete', body })
	}
}
