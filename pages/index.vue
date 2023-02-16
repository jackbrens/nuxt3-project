<template>
	<div class="timeline">
		<nav class="view-nav">
			<div class="nav-list">
				<a href="javascript:;" class="nav-item">综合</a>
				<a href="javascript:;" class="nav-item">关注</a>
				<a href="javascript:;" class="nav-item">后端</a>
				<a href="javascript:;" class="nav-item">前端</a>
			</div>
		</nav>
		<div class="timeline-container">
			<div class="timeline-entry-list">
				<header class="list-header">
					<nav class="list-nav">
						<ul class="nav-list">
							<li class="nav-item">推荐</li>
							<li class="nav-item">最新</li>
							<li class="nav-item">热榜</li>
						</ul>
					</nav>
				</header>
				<ClientOnly>
					<div v-if="loading" style="padding: 20px">
						<el-skeleton :rows="3" animated />
					</div>
					<div v-else class="entry-list-wrap">
						<li v-for="(item, index) in recommend" :key="index" class="entry-item">
							<div class="entry">
								<div class="meta-container">
									<a class="user-message">{{ item.item_info.author_user_info.user_name }}</a>
									<div class="date">
										{{ recommendDate(changeDate(item.item_info.article_info.ctime)) }}
									</div>
								</div>
								<div class="content-wrapper">
									<div class="content-main">
										<div class="title-row">
											<a :title="item.item_info.article_info.title" class="title">{{
												item.item_info.article_info.title
											}}</a>
										</div>
										<div class="abstract">
											{{ item.item_info.article_info.brief_content }}
										</div>
									</div>
									<img
										v-if="item.item_info.article_info.cover_image"
										:src="item.item_info.article_info.cover_image"
										class="thumb"
										:alt="item.item_info.article_info.title"
										loading="lazy"
									/>
								</div>
							</div>
						</li>
						<div
							id="bottom-loading"
							ref="bottomLoading"
							class="bottom-loading"
							style="text-align: center; color: #86909c; height: 40px"
						></div>
					</div>
				</ClientOnly>
			</div>
			<aside class="sidebar">
				<div class="signin">
					<div class="first-line">
						<div class="icon-text">
							<span class="title">
								连续签到
								<span class="title-days">999天</span>
							</span>
							<div class="second-line">点亮在社区的每一天</div>
						</div>
						<button class="signedin-btn">
							<span class="signed-text">已签到</span>
						</button>
					</div>
				</div>
				<div class="sidebar-block">
					<img
						src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f20c2bbd8fa4b62a7491ed1851ebd02~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
						alt=""
					/>
				</div>
				<div class="sidebar-block">
					<img
						src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bf8b92261f74fb0ab7bbfa097c1fa94~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
						alt=""
					/>
				</div>
				<div class="sidebar-block">
					<img
						src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42ff233ffee54f7391896ec2e7bcb31b~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
						alt=""
					/>
				</div>
			</aside>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { recommendDate, changeDate } from '@/utils'
import { getRecommend } from '@/api/user'

const loading = ref(true)
const recommend = ref<any>([])

// 提示一：延迟 1 秒替换骨架屏，目的是模拟掘金首页文章初次渲染的效果
setTimeout(() => {
	loading.value = false
}, 1000)

onMounted(() => {
	// 提示二：延迟 1.5 秒原因是 loadingDiv 元素在 "提示一" 中需要延迟 1 秒后才渲染出来，
	// 需要设置大于"提示一" 中的时间，不然拿不到元素

	setTimeout(() => {
		const loadingDiv = document.querySelector('#bottom-loading')
		const observerFn = (entries: any) => {
			entries.forEach(async (item: any) => {
				// 一旦元素可见，调用函数
				if (item.isIntersecting) {
					const { data }: any = await getRecommend()

					// 过滤一下，把不是文章类型的去掉
					const list = data?.filter((v: { item_type: number }) => v.item_type === 2)
					recommend.value = [...recommend.value, ...list]
				}
			})
		}
		const observer = new IntersectionObserver(observerFn)
		observer.observe(loadingDiv!)
	}, 1500)
})
</script>

<style lang="scss" scoped>
.timeline {
	.view-nav {
		position: fixed;
		top: 60px;
		left: 0;
		width: 100%;
		height: 46px;
		z-index: 100;
		font-size: 14px;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
		transition: all 0.2s;
		transform: translateZ(0);
		background-color: $juejin-navigation;
		.nav-list {
			max-width: 960px;
			height: 100%;
			margin: auto;
			display: flex;
			align-items: center;
			.nav-item {
				color: $juejin-font-2;
				padding: 0 12px;
			}
			.nav-item:first-of-type {
				padding: 0 12px 0 0;
			}
		}
	}
	.timeline-container {
		box-sizing: border-box;
		position: relative;
		.timeline-entry-list {
			background-color: $juejin-navigation;
			width: 700px;
			.list-header {
				color: $juejin-font-2;
				font-size: 14px;
				padding: 15px 12px;
				border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
				.list-nav {
					.nav-list {
						display: flex;
						.nav-item {
							cursor: pointer;
							padding: 0 14px;
							font-size: 15px;
							border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
							&:hover {
								color: #000;
							}
						}
					}
				}
			}
			.entry-list-wrap {
				.entry-item {
					.entry {
						position: relative;
						cursor: pointer;
						padding: 12px 20px 0;
						&:hover {
							background: #fafafa;
						}
						.meta-container {
							font-size: 13px;
							color: #86909c;
							display: flex;
							.user-message {
								display: flex;
								align-items: center;
								margin-right: 8px;
								max-width: 162px;
								font-size: 13px;
								line-height: 22px;
								color: #4e5969;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								word-break: break-all;
								&:hover {
									color: #1d7dfa;
								}
							}
							.date {
								position: relative;
								padding: 0 10px;
								line-height: 22px;
								font-size: 13px;
								flex-shrink: 0;
								&::before {
									content: '';
									position: absolute;
									top: 50%;
									left: 0;
									transform: translateY(-50%);
									display: block;
									width: 1px;
									height: 14px;
									background: #e5e6eb;
								}
								&::after {
									content: '';
									position: absolute;
									top: 50%;
									right: 0;
									transform: translateY(-50%);
									display: block;
									width: 1px;
									height: 14px;
									background: #e5e6eb;
								}
							}
						}
						.content-wrapper {
							display: flex;
							padding-bottom: 12px;
							border-bottom: 1px solid rgba(228, 230, 235, 0.5);
							margin-top: 10px;
							width: 100%;
							.content-main {
								flex: 1 1 auto;
								.title-row {
									display: flex;
									margin-bottom: 8px;
									.title {
										font-weight: 700;
										font-size: 16px;
										line-height: 24px;
										color: #1d2129;
										width: 100%;
										@include text-overflow(1);
									}
								}
								.abstract {
									color: #86909c;
									font-size: 13px;
									line-height: 22px;
									@include text-overflow(1);
								}
							}
							.thumb {
								flex: 0 0 auto;
								width: 120px;
								height: 80px;
								margin-left: 24px;
								background-color: #fff;
								border-radius: 2px;
								object-fit: cover;
							}
						}
					}
				}
			}
		}
		.sidebar {
			position: absolute;
			top: 0;
			right: 0;
			width: 240px;
			height: 200vh;
			.signin {
				background-color: $juejin-navigation;
				width: 240px;
				margin-bottom: 16px;
				padding: 16px;
				box-sizing: border-box;
				.first-line {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					.icon-text {
						display: flex;
						flex-direction: column;
						.title {
							color: #1d2129;
							font-size: 16px;
							font-weight: 600;
							line-height: 24px;
							.title-days {
								margin-left: 4px;
								color: #1e80ff;
							}
						}
						.second-line {
							color: #8a919f;
							font-size: 12px;
							font-weight: 400;
							line-height: 24px;
						}
					}
					.signedin-btn {
						border-radius: 4px;
						height: 36px;
						width: 74px;
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						border: 1px solid rgba(30, 128, 255, 0.3);
						background-color: rgba(30, 128, 255, 0.05);
						.signed-text {
							color: #abcdff;
							font-size: 14px;
							font-weight: 400;
							white-space: nowrap;
						}
					}
				}
			}
			.sidebar-block {
				overflow: hidden;
				background-color: $juejin-navigation;
				box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
				border-radius: 2px;
				margin-bottom: 1.3rem;
				font-size: 1.16rem;
				line-height: 1.29;
				color: #333;
				height: 200px;
				img {
					width: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
