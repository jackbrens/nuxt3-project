<template>
	<div class="timeline">
		<div class="index-nav">
			<client-only><navigation-sidebar :list="category" /></client-only>
		</div>
		<div class="timeline-container">
			<div class="timeline-entry-list">
				<header class="list-header">
					<nav class="list-nav">
						<ul class="nav-list">
							<li class="nav-item">推荐</li>
							<li class="nav-item">最新</li>
						</ul>
					</nav>
				</header>
				<div v-if="loading" style="padding: 20px">
					<el-skeleton :rows="3" animated />
				</div>
				<div v-else class="entry-list-wrap">
					<li v-for="(item, index) in recommend" :key="index" class="entry-item" @click="toArticleDetail(item)">
						<div class="entry">
							<div class="meta-container">
								<a class="user-message">{{ item.item_info.author_user_info.user_name }}</a>
								<div class="date">
									{{ recommendDate(item.item_info.article_info.ctime) }}
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
									<div class="entry-footer">
										<ul class="action-list">
											<li class="item view">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="view-icon"
												>
													<path
														d="M7.90078 2.80078C4.49278 2.80078 1.74745 6.11672 0.800781 7.77469C1.74745 9.58339 4.49278 13.2008 7.90078 13.2008C11.3088 13.2008 14.0541 9.58339 15.0008 7.77469C14.0541 6.11672 11.3088 2.80078 7.90078 2.80078Z"
														stroke="currentColor"
													></path>
													<circle cx="7.89922" cy="8.00078" r="2.2" stroke="currentColor"></circle>
												</svg>
												<span>{{ item.item_info.article_info.view_count }}</span>
											</li>
											<li class="item like">
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="liked-icon"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M7.56162 1.16952C7.66569 1.09661 7.78195 1.06124 7.88247 1.0912C7.97653 1.11923 8.23851 1.25916 8.50988 1.96799C8.64419 2.31881 8.9356 3.2424 8.42155 5.05431C8.29751 5.49152 8.61394 5.95303 9.09259 5.95971L12.492 6.00716L12.492 6.00721H12.4991C12.6049 6.00721 12.7228 6.01986 12.8134 6.05898C12.8544 6.07671 12.8815 6.09639 12.8999 6.116C12.9166 6.13375 12.9368 6.16247 12.9515 6.21636C12.9848 6.33784 13.0228 6.74712 12.9473 7.42262C12.874 8.07857 12.698 8.94479 12.341 9.9598C12.0424 10.8088 11.6601 11.5292 11.0684 12.4879C11.0558 12.5052 11.0462 12.5197 11.0418 12.5265L11.0404 12.5285C11.0292 12.5454 11.0242 12.5531 11.018 12.5618C11.0076 12.5764 11.0018 12.582 10.9983 12.585C10.996 12.587 10.9908 12.5912 10.9777 12.5959C10.9638 12.6009 10.9311 12.61 10.8706 12.61H4.56278L4.56373 5.58489C4.87126 5.41901 5.19881 5.20128 5.54112 4.84059C5.93883 4.42152 6.33789 3.8294 6.76254 2.94183C6.84974 2.75957 6.91745 2.55962 6.97574 2.37762C6.99264 2.32486 7.0087 2.27379 7.02438 2.22393L7.02439 2.22389C7.066 2.09158 7.10495 1.96776 7.14985 1.84312C7.2758 1.49352 7.40247 1.28101 7.56162 1.16952ZM9.45205 1.60729C9.13229 0.772086 8.70208 0.282772 8.17063 0.124374C7.64564 -0.0320981 7.20308 0.188912 6.98278 0.343248C6.55169 0.64525 6.33837 1.11908 6.20071 1.5012C6.14817 1.64705 6.10002 1.80016 6.05661 1.93824C6.0422 1.98405 6.02832 2.02821 6.01496 2.0699C5.95791 2.24804 5.90763 2.39115 5.85248 2.50643C5.45683 3.3334 5.1121 3.8271 4.80935 4.14611C4.51322 4.45815 4.23983 4.6219 3.9473 4.76821C3.71095 4.88641 3.55494 5.12906 3.55491 5.40159L3.55388 12.9125C3.55383 13.3026 3.87002 13.6188 4.26008 13.6188H10.8706C11.2097 13.6188 11.4663 13.5113 11.6519 13.3535C11.7387 13.2797 11.7988 13.2043 11.8387 13.1484C11.8556 13.1248 11.8704 13.1025 11.8786 13.09L11.8813 13.0859L11.8826 13.0839L11.8955 13.0685L11.9142 13.0382C12.5304 12.0414 12.9578 11.247 13.2927 10.2945C13.6745 9.20895 13.8679 8.26811 13.9499 7.5347C14.0297 6.82084 14.009 6.25845 13.9246 5.95014C13.805 5.51285 13.5104 5.26112 13.2134 5.13284C12.9385 5.01407 12.661 4.99859 12.5028 4.99836L9.49071 4.95631C9.92962 3.15791 9.64796 2.11902 9.45205 1.60729ZM0.000800636 5.46783C-0.0181914 5.0652 0.303128 4.72836 0.706212 4.72836H1.75264C2.14266 4.72836 2.45883 5.04454 2.45883 5.43456V12.9442C2.45883 13.3342 2.14266 13.6504 1.75264 13.6504H1.06044C0.68335 13.6504 0.372791 13.3541 0.355024 12.9775L0.000800636 5.46783Z"
														fill="currentColor"
													></path>
												</svg>
												<span>{{ item.item_info.article_info.digg_count }}</span>
											</li>
										</ul>
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
			</div>
			<aside class="sidebar">
				<div class="signin">
					<div class="first-line">
						<div class="icon-text">
							<span class="title">
								您好！
								<!-- <span class="title-days">999天</span> -->
							</span>
							<div class="second-line">点亮在社区的每一天</div>
						</div>
						<button class="signedin-btn">
							<span class="signed-text">不给签到</span>
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
import { useRouter } from 'vue-router'
import { recommendDate } from '@/utils'
import { getCategoryBriefs, getRecommendAll } from '@/api/user'
import { Category } from '@/api/interface'
const router = useRouter()

useHead({
	title: '- 掘金 -',
})

const loading = ref(true)
const recommend = ref<any>([])

// 提示一：延迟 1 秒替换骨架屏，目的是模拟掘金首页文章初次渲染的效果
setTimeout(() => {
	loading.value = false
}, 1000)

const { data }: any = await getRecommendAll()
recommend.value = data.filter((v: { item_type: number }) => v.item_type === 2)

onMounted(() => {
	// 提示二：延迟 1.5 秒原因是 loadingDiv 元素在 "提示一" 中需要延迟 1 秒后才渲染出来，
	// 需要设置大于"提示一" 中的时间，不然拿不到元素

	setTimeout(() => {
		const loadingDiv = document.querySelector('#bottom-loading')
		const observerFn = (entries: any) => {
			entries.forEach(async (item: any) => {
				// 一旦元素可见，调用函数
				if (item.isIntersecting) {
					const { data }: any = await getRecommendAll()

					// 过滤一下，把不是文章类型的去掉
					const list = data.filter((v: { item_type: number }) => v.item_type === 2)
					recommend.value = [...recommend.value, ...list]
				}
			})
		}
		const observer = new IntersectionObserver(observerFn)
		observer.observe(loadingDiv!)
	}, 1500)
})

const toArticleDetail = (item: any) => {
	const id = item?.item_info?.article_id
	const { href } = router.resolve({
		path: `/post/${id}`,
	})
	window.open(href)
}

// 获取类别摘要
const category = ref<Category[]>([{ category_name: '综合', category_url: '/' }])
const getCategoryBriefsFn = async () => {
	const { data } = await getCategoryBriefs()
	data.forEach((item: Category) => {
		category.value.push(item)
	})
}
getCategoryBriefsFn()
</script>

<style lang="scss" scoped>
.timeline {
	margin-top: 1.62rem;
	display: flex;
	.index-nav {
		width: 180px;
		position: sticky;
		top: 80px;
		margin-right: 20px;
		height: fit-content;
		border-radius: 4px;
		background-color: var(--navbar-background-color);
		max-height: calc(100vh - 101px);
		overflow-x: hidden;
	}
	.timeline-container {
		flex-grow: 1;
		box-sizing: border-box;
		position: relative;
		.timeline-entry-list {
			background-color: var(--navbar-background-color);
			width: 720px;
			border-radius: 4px 4px 0 0;
			.list-header {
				color: var(--juejin-color-nav-title);
				font-size: 14px;
				padding: 15px 12px;
				border-bottom: 1px solid var(--border-line-color);
				.list-nav {
					.nav-list {
						display: flex;
						.nav-item {
							position: relative;
							cursor: pointer;
							padding: 0 14px;
							font-size: 15px;
							color: var(--secondary-color);
							&:hover {
								color: var(--link-color);
							}
							&:first-of-type {
								color: var(--primary-color);
							}
							&:first-of-type::before {
								display: block;
								content: '';
								position: absolute;
								bottom: -1rem;
								left: 40%;
								width: 22%;
								height: 3px;
								background-color: var(--link-color);
								border-radius: 2px;
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
							background: var(--article-hover-bg);
						}
						.meta-container {
							font-size: 13px;
							color: var(--secondary-color);
							display: flex;
							.user-message {
								display: flex;
								align-items: center;
								margin-right: 8px;
								max-width: 162px;
								font-size: 13px;
								line-height: 22px;
								color: var(--secondary-color);
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
									background: var(--secondary-color);
								}
							}
						}
						.content-wrapper {
							display: flex;
							padding-bottom: 12px;
							border-bottom: 1px solid var(--border-line-color);
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
										color: var(--primary-color);
										width: 100%;
										@include text-overflow(1);
									}
								}
								.abstract {
									color: var(--secondary-color);
									font-size: 13px;
									line-height: 22px;
									margin-bottom: 8px;
									@include text-overflow(1);
								}
								.entry-footer {
									display: flex;
									align-items: center;
									.action-list {
										display: flex;
										align-items: center;
										& > .item {
											position: relative;
											margin-right: 24px;
											font-size: 13px;
											line-height: 20px;
											color: var(--article-desc-color);
											flex-shrink: 0;
											display: flex;
											align-items: center;
											span {
												margin-left: 4px;
											}
										}
									}
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
			width: 21.66rem;
			height: 200vh;
			.signin {
				background-color: var(--navbar-background-color);
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
							color: var(--primary-color);
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
				background-color: #fff;
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
