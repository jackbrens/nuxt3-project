<template>
	<div class="timeline">
		<div class="index-nav">
			<nav class="side-navigator-wrap">
				<div class="nav-item-warp">
					<div class="nav-item-content">
						<a href="/" class="nav-item"
							><svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								data-v-d00cfa20=""
								class=""
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z"
									fill="currentColor"
									data-v-d00cfa20=""
								></path>
							</svg>
							<span class="nav-item-text"> 综合 </span></a
						>
					</div>
				</div>
				<div v-for="(item, index) in category" :key="index" class="nav-item-warp">
					<div class="nav-item-content">
						<a href="/following" class="nav-item"
							><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
								<path
									d="M11.5903 8.19043C11.5542 8.11425 11.4458 8.11425 11.4097 8.19043L10.4041 10.31C10.3898 10.3401 10.3615 10.3611 10.3287 10.366L8.19408 10.6887C8.11329 10.7009 8.08045 10.7996 8.13783 10.8578L9.68325 12.4248C9.70571 12.4476 9.71592 12.4798 9.71072 12.5113L9.33377 14.7975C9.32021 14.8798 9.4073 14.9415 9.48042 14.9015L11.452 13.8233C11.4819 13.8069 11.5181 13.8069 11.548 13.8233L13.5196 14.9015C13.5927 14.9415 13.6798 14.8798 13.6662 14.7975L13.2893 12.5113C13.2841 12.4798 13.2943 12.4476 13.3168 12.4248L14.8622 10.8578C14.9195 10.7996 14.8867 10.7009 14.8059 10.6887L12.6713 10.366C12.6385 10.3611 12.6102 10.3401 12.5959 10.31L11.5903 8.19043Z"
									fill="currentColor"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12.7568 1.3335C13.4239 1.3335 13.9641 1.86183 13.9983 2.52111L14 2.58746V6.34783V9.44263L13.7881 9.41059C13.6565 9.39071 13.5435 9.30673 13.4865 9.18654L11.8614 5.76125C11.7168 5.45652 11.2832 5.45652 11.1386 5.76125L9.51354 9.18654C9.45652 9.30673 9.34347 9.39071 9.21193 9.41059L5.77633 9.92991C5.45315 9.97876 5.32181 10.3736 5.55131 10.6063L8.04943 13.1394C8.13927 13.2305 8.18011 13.3591 8.1593 13.4853L7.90953 15.0002H5.42606H3.24324C2.57608 15.0002 2.03587 14.4718 2.00171 13.8125L2 13.7462V2.58746C2 1.91989 2.51869 1.37002 3.17696 1.33524L3.24324 1.3335H12.7568ZM7.33333 7.00017C7.33333 6.81608 7.18409 6.66684 7 6.66684H5C4.8159 6.66684 4.66666 6.81608 4.66666 7.00017V7.66684C4.66666 7.85093 4.8159 8.00017 5 8.00017H7C7.18409 8.00017 7.33333 7.85093 7.33333 7.66684V7.00017ZM9.66666 4.00017C9.85076 4.00017 10 4.14941 10 4.3335V5.00017C10 5.18426 9.85076 5.3335 9.66666 5.3335H5C4.8159 5.3335 4.66666 5.18426 4.66666 5.00017V4.3335C4.66666 4.14941 4.8159 4.00017 5 4.00017H9.66666Z"
									fill="currentColor"
								></path>
							</svg>
							<span class="nav-item-text"> {{ item.category_name }} </span></a
						>
					</div>
				</div>
			</nav>
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
import { useRouter } from 'vue-router'
import { recommendDate } from '@/utils'
import { getCategoryBriefs, getRecommendAll } from '@/api/user'
const router = useRouter()

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
const category = ref([])
const categoryResult: any = await getCategoryBriefs()
category.value = categoryResult.data
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
		background-color: #fff;
		max-height: calc(100vh - 101px);
		overflow-x: hidden;
		.side-navigator-wrap {
			min-width: 180px;
			box-sizing: border-box;
			padding: 8px;
			font-size: 16px;
			color: var(--primary-color);
			.nav-item-warp {
				display: flex;
				flex-direction: column;
				.nav-item-content {
					line-height: 24px;
					border-radius: 4px;
					cursor: pointer;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					&:hover {
						background-color: var(--juejin-gray-3);
					}
					.nav-item {
						display: inline-block;
						width: 100%;
						box-sizing: border-box;
						position: relative;
						padding: 10px 17px;
						color: var(--juejin-color-nav-title);
						&:hover {
							color: var(--link-color);
						}
						&:hover svg {
							color: var(--link-color);
						}
						svg {
							vertical-align: middle;
							margin-right: 12px;
							color: var(--secondary-color);
						}
						.nav-item-text {
							vertical-align: middle;
							position: relative;
						}
					}
				}
			}
		}
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
			width: 21.66rem;
			height: 200vh;
			.signin {
				background-color: #fff;
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
