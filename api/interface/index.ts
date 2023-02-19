// * 登录模块
export namespace Login {
	export interface ReqLoginForm {
		name: string
		password: string
	}
	export interface LoginAuth {
		token: string
	}
}

// 后端返回的数据类型
export interface HttpResponse<T> {
	code?: number
	data?: T
	msg?: string
}
