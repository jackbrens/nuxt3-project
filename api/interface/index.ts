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

// 文章类型
export interface Category {
	back_ground?: string
	category_id?: string
	category_name?: string
	category_url?: string
	ctime?: number
	icon?: string
	item_type?: number
	mtime?: number
	promote_priority?: number
	promote_tag_cap?: number
	rank?: number
	show_type?: number
}
