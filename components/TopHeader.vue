<template>
	<header class="mian-header">
		<div class="container">
			<a href="/" class="logo">
				<img
					src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
					alt=""
				/>
			</a>
			<nav class="main-nav">
				<ul class="nav-list">
					<ul class="isResourceVisible">
						<li v-for="nav in navList" :key="nav.id" class="nav-item">{{ nav.label }}</li>
					</ul>
					<ul class="right-side-nav">
						<li class="nav-item notification">
							<a href="javascript:;" class="notification-a">
								<svg
									width="24"
									height="24"
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
							</a>
						</li>
						<li class="nav-item menu">
							<div class="login-button-wrapper">
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
							<div class="avatar-wrapper" data-v-d86115f8="">
								<img
									src="https://p3-passport.byteimg.com/img/user-avatar/19f8f5039f149b730e43da0cb19419cd~100x100.awebp"
									alt="JackBrens的头像"
									class="lazy avatar avatar immediate"
									loading="lazy"
								/>
							</div>
						</li>
					</ul>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { FormInstance, FormRules } from 'element-plus'
import { Login } from '@/api/interface'
import { login, setToken } from '@/api/user'
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

const visible = ref(true)
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
			const res = await login(ruleForm)
			console.log(res)

			// 登录成功
			// if (code === 200 && token) {
			// 	setToken(token)
			// }
			visible.value = false
		}
	})
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.mian-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: all 0.2s;
	background: $juejin-navigation;
	border-bottom: 1px solid #f1f1f1;
	color: $juejin-font-2;
	height: 60px;
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
			width: auto;
			img {
				display: block;
				width: 107px;
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
							color: #000;
						}
					}
				}
				.right-side-nav {
					display: flex;
					.nav-item {
						display: flex;
						align-items: center;
						padding: 0 12px;
					}
					.notification {
						fill: #8a919f;
						stroke: #8a919f;
					}
					.menu {
						.login-button-wrapper {
							.login-button {
								cursor: pointer;
								background: rgba(30, 128, 255, 0.05);
								border: 1px solid rgba(30, 128, 255, 0.3);
								border-radius: 4px;
								padding: 4px 12px;
								color: #007fff;
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
								border-bottom: 1px solid rgba(228, 230, 235, 0.5);
								padding-bottom: 24px;
								span {
									font-size: 20px;
								}
								i {
									cursor: pointer;
									color: $juejin-font-2 !important;
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
									color: #000;
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
