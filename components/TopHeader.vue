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
						cursor: pointer;
					}
					.notification {
						fill: #8a919f;
						stroke: #8a919f;
					}
					.menu {
						.avatar-wrapper {
							margin-right: 24px;
							img {
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
