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
