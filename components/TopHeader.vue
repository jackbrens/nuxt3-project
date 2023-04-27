<template>
	<header class="main-header">
		<div class="container">
			<a href="/" class="logo">
				<ClientOnly>
					<img
						v-if="useIsLight"
						src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
						alt=""
					/>
					<img
						v-else
						src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/brand-dark.3111cff6.svg"
						alt=""
					/>
				</ClientOnly>
			</a>
			<nav class="main-nav">
				<ul class="nav-list">
					<ul class="isResourceVisible">
						<li v-for="nav in navList" :key="nav.id" class="nav-item">{{ nav.label }}</li>
					</ul>
					<ClientOnly>
						<ul class="right-side-nav">
							<li class="nav-item notification">
								<el-tooltip class="box-tooltip" effect="dark" content="切换主题颜色" placement="bottom">
									<!-- 暗色模式 -->
									<svg
										v-if="useIsLight"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										focusable="false"
										aria-hidden="true"
										@click="changeThemePriamry('dark')"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17 15C17.476 15 17.9408 14.9525 18.3901 14.862C17.296 17.3011 14.8464 19 12 19C8.13401 19 5 15.866 5 12C5 8.60996 7.40983 5.78277 10.6099 5.13803C10.218 6.01173 10 6.98041 10 8C10 11.866 13.134 15 17 15Z"
											fill="currentColor"
										></path>
									</svg>
									<!-- 亮色模式 -->
									<svg
										v-else
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										focusable="false"
										aria-hidden="true"
										@click="changeThemePriamry('light')"
									>
										<path
											d="M10.5 1.5C10.5 0.671573 11.1716 0 12 0C12.8284 0 13.5 0.671573 13.5 1.5V2.5C13.5 3.32843 12.8284 4 12 4C11.1716 4 10.5 3.32843 10.5 2.5V1.5Z"
											fill="currentColor"
										></path>
										<path
											d="M10.5 21.5C10.5 20.6716 11.1716 20 12 20C12.8284 20 13.5 20.6716 13.5 21.5V22.5C13.5 23.3284 12.8284 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5V21.5Z"
											fill="currentColor"
										></path>
										<path
											d="M24 12C24 11.1716 23.3284 10.5 22.5 10.5H21.5C20.6716 10.5 20 11.1716 20 12C20 12.8284 20.6716 13.5 21.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12Z"
											fill="currentColor"
										></path>
										<path
											d="M2.5 10.5C3.32843 10.5 4 11.1716 4 12C4 12.8284 3.32843 13.5 2.5 13.5H1.5C0.671573 13.5 0 12.8284 0 12C0 11.1716 0.671573 10.5 1.5 10.5H2.5Z"
											fill="currentColor"
										></path>
										<path
											d="M20.4853 3.51472C19.8995 2.92893 18.9497 2.92893 18.364 3.51472L17.6569 4.22182C17.0711 4.80761 17.0711 5.75736 17.6569 6.34314C18.2426 6.92893 19.1924 6.92893 19.7782 6.34314L20.4853 5.63604C21.0711 5.05025 21.0711 4.1005 20.4853 3.51472Z"
											fill="currentColor"
										></path>
										<path
											d="M4.22181 17.6569C4.8076 17.0711 5.75734 17.0711 6.34313 17.6569C6.92892 18.2426 6.92892 19.1924 6.34313 19.7782L5.63602 20.4853C5.05024 21.0711 4.10049 21.0711 3.5147 20.4853C2.92892 19.8995 2.92892 18.9497 3.5147 18.364L4.22181 17.6569Z"
											fill="currentColor"
										></path>
										<path
											d="M3.5147 3.51472C2.92891 4.1005 2.92891 5.05025 3.5147 5.63604L4.22181 6.34315C4.80759 6.92893 5.75734 6.92893 6.34313 6.34315C6.92891 5.75736 6.92891 4.80761 6.34313 4.22183L5.63602 3.51472C5.05023 2.92893 4.10049 2.92893 3.5147 3.51472Z"
											fill="currentColor"
										></path>
										<path
											d="M17.6569 19.7782C17.0711 19.1924 17.0711 18.2426 17.6569 17.6569C18.2426 17.0711 19.1924 17.0711 19.7782 17.6569L20.4853 18.364C21.0711 18.9497 21.0711 19.8995 20.4853 20.4853C19.8995 21.0711 18.9497 21.0711 18.364 20.4853L17.6569 19.7782Z"
											fill="currentColor"
										></path>
										<path
											d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
											fill="currentColor"
										></path>
									</svg>
								</el-tooltip>
							</li>
							<li class="nav-item notification">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									class="notification-icon"
									data-v-d86115f8=""
								>
									<path
										d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z"
										stroke-width="1.5"
										stroke-linecap="round"
										data-v-d86115f8=""
									></path>
									<path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-d86115f8=""></path>
									<path
										d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z"
										stroke-linecap="round"
										stroke-linejoin="round"
										data-v-d86115f8=""
									></path>
								</svg>
							</li>
							<li class="nav-item menu">
								<div v-show="!useGlobalStore.getUserInfo" class="login-button-wrapper">
									<button class="login-button" @click="openDialog()">登录 | 注册</button>
									<ClientOnly>
										<el-dialog
											v-model="visible"
											:show-close="false"
											width="660px"
											:close-on-click-modal="false"
											align-center
										>
											<template #header="{ close, titleId, titleClass }">
												<div class="my-header">
													<span :id="titleId" :class="titleClass">登录掘金畅享更多权益</span>
													<el-icon @click="close"><Close /></el-icon>
												</div>
											</template>
											<div class="login-body">
												<span>密码登录</span>
												<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" size="large">
													<el-form-item prop="name">
														<el-input v-model="ruleForm.name" placeholder="请输入邮箱/手机号（国际号码加区号）" />
													</el-form-item>
													<el-form-item prop="password">
														<el-input v-model="ruleForm.password" placeholder="请输入密码" />
													</el-form-item>
													<el-form-item>
														<el-button type="primary" style="width: 100%" @click="submitForm(ruleFormRef)"
															>登录</el-button
														>
													</el-form-item>
												</el-form>
											</div>
										</el-dialog>
									</ClientOnly>
								</div>
								<div v-show="useGlobalStore.getUserInfo" class="avatar-wrapper" data-v-d86115f8="">
									<el-popconfirm
										width="220"
										confirm-button-text="yes"
										cancel-button-text="no"
										:icon="InfoFilled"
										icon-color="#626AEF"
										title="是否退出登录？"
										@confirm="logout"
									>
										<template #reference>
											<img
												src="https://p3-passport.byteimg.com/img/user-avatar/19f8f5039f149b730e43da0cb19419cd~100x100.awebp"
												alt="JackBrens的头像"
												class="lazy avatar avatar immediate"
												loading="lazy"
											/>
										</template>
									</el-popconfirm>
								</div>
							</li>
						</ul>
					</ClientOnly>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { Close, InfoFilled } from '@element-plus/icons-vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { Login } from '@/api/interface'
import { login, setToken } from '@/api/user'
import { GlobalStore } from '@/store'
const useGlobalStore = GlobalStore()
const router = useRouter()
const navList = [
	{
		id: 1,
		label: '首页',
	},
	{
		id: 2,
		label: '沸点',
	},
	{
		id: 3,
		label: '课程',
	},
	{
		id: 4,
		label: '直播',
	},
	{
		id: 5,
		label: '活动',
	},
	{
		id: 6,
		label: '商城',
	},
	{
		id: 7,
		label: 'APP',
	},
	{
		id: 8,
		label: '插件',
	},
]

const visible = ref(false)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<Login.ReqLoginForm>({
	name: '',
	password: '',
})
const rules = reactive<FormRules>({
	name: [{ required: true, message: '手机号或邮箱不能为空', trigger: 'blur' }],
	password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
})

// 打开登录对话框
const openDialog = () => {
	visible.value = true
	resetForm(ruleFormRef.value)
}

// 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	await formEl.validate(async (valid, fields) => {
		if (valid) {
			const { code, data }: any = await login(ruleForm)

			// 登录成功
			if (code === 200 && data.token) {
				setToken(data.token)
				useGlobalStore.setUserInfo(data)
			}
			visible.value = false

			// 刷新页面
			router.go(0)
		}
	})
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

// 退出登录
const logout = () => {
	useGlobalStore.setUserInfo('')

	// 刷新页面
	router.go(0)
}

/* 切换亮色暗色模式逻辑代码 */
const useIsLight = computed(() => useGlobalStore.isLight)

// 切换主题颜色
const changeThemePriamry = (val: string) => {
	if (process.client) {
		if (useGlobalStore.getThemePrimary === 'light') {
			useGlobalStore.setThemeConfig(val)
			Cookies.set('theme-mode', val)
			document.querySelector('#themeConfig')!.className = val
		} else {
			useGlobalStore.setThemeConfig(val)
			Cookies.set('theme-mode', val)
			document.querySelector('#themeConfig')!.className = val
		}
	}
}
</script>

<style lang="scss" scoped>
.main-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: all 0.2s;
	background: var(--navbar-background-color);
	border-bottom: 1px solid var(--border-line-color);
	color: var(--juejin-color-nav-title);
	height: torem(60);
	z-index: 250;
	.container {
		height: 100%;
		margin: auto;
		max-width: 1440px;
		display: flex;
		align-items: center;
		.logo {
			margin-right: 12px;
			margin-left: 24px;
			display: inline-block;
			height: 22px;
			min-width: 107px;
			img {
				display: block;
				width: 100%;
				height: 22px;
			}
		}
		.main-nav {
			height: 100%;
			flex: 1 0 auto;
			.nav-list {
				height: 100%;
				display: flex;
				justify-content: space-between;
				.isResourceVisible {
					display: flex;
					.nav-item {
						padding: 0 12px;
						font-size: 14px;
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						position: relative;
						&:hover {
							color: var(--primary-color);
						}
					}
				}
				.right-side-nav {
					display: flex;
					.nav-item {
						cursor: pointer;
						display: flex;
						align-items: center;
						padding: 0 12px;
					}
					.notification {
						fill: #8a919f;
						stroke: #8a919f;
						color: #8a919f;
						&:hover {
							fill: #515767;
							stroke: #515767;
							color: #515767;
						}
						svg {
							width: 24px;
							height: 24px;
						}
					}
					.menu {
						.login-button-wrapper {
							.login-button {
								cursor: pointer;
								background: rgba(30, 128, 255, 0.05);
								border: 1px solid rgba(30, 128, 255, 0.3);
								border-radius: 4px;
								padding: 4px 12px;
								color: var(--link-color);
								line-height: 22px;
								font-size: 14px;
								font-weight: 400;
								margin-right: 24px;
								height: 36px;
								overflow: hidden;
							}
							.my-header {
								display: flex;
								justify-content: space-between;
								border-bottom: 1px solid #e4e6eb80;
								padding-bottom: 24px;
								span {
									font-size: 20px;
								}
								i {
									cursor: pointer;
									color: var(--secondary-color) !important;
									width: 24px;
									height: 24px;
									svg {
										width: 100%;
										height: 100%;
									}
								}
							}
							.login-body {
								width: 50%;
								& > span {
									display: inline-block;
									font-size: 16px;
									color: var(--primary-color);
									margin-bottom: 24px;
								}
							}
						}

						.avatar-wrapper {
							margin-right: 24px;
							img {
								cursor: pointer;
								width: 36px;
								height: 36px;
								border-radius: 50%;
								position: relative;
							}
						}
					}
				}
			}
		}
	}
}
</style>
