<template>
	<div class="view">
		<div class="article">
			<h1 class="article-title">
				{{ articleTitle }}
			</h1>
			<div class="author-info-box">
				<div class="author-name">
					<a class="username">{{ userName }}</a>
				</div>
				<div class="meta-box">
					<time
						datetime="2023-08-02T13:47:27.000Z"
						title="Wed Aug 02 2023 21:47:27 GMT+0800 (中国标准时间)"
						class="time"
					>
						2023-08-02 21:47
					</time>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="read-icon"
					>
						<path
							d="M7.90078 2.80078C4.49278 2.80078 1.74745 6.11672 0.800781 7.77469C1.74745 9.58339 4.49278 13.2008 7.90078 13.2008C11.3088 13.2008 14.0541 9.58339 15.0008 7.77469C14.0541 6.11672 11.3088 2.80078 7.90078 2.80078Z"
							stroke="currentColor"
						></path>
						<circle cx="7.89922" cy="8.00078" r="2.2" stroke="currentColor"></circle>
					</svg>
					<span class="views-count">{{ viewCount }}</span>
				</div>
			</div>
			<div class="article-content markdown-body" v-html="post" />
		</div>
		<div class="sidebar">
			<article-author :userinfo="userinfo" />
			<catalog :post="post"></catalog>
		</div>
	</div>
</template>

<script lang="ts" setup>
import highlight from 'highlight.js'

// @ts-ignore
import MarkdownIt from 'markdown-it'
import 'highlight.js/styles/atom-one-dark.css'
import { useRoute } from 'vue-router'
import { getArticleDetail } from '@/api/user'
const route = useRoute()

const articleTitle = ref<string>('')
const userName = ref<string>('')
const viewCount = ref<number>(0)
const post = ref('')
const { data } = await getArticleDetail(route.params.id as string)
articleTitle.value = data?.article_info?.title
userName.value = data?.author_user_info?.user_name
viewCount.value = data?.article_info?.view_count
const userinfo = ref(data?.author_user_info)

const markdown: any = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true,
	langPrefix: 'hljs hl',
	highlight(str: any, lang: any) {
		if (lang && highlight.getLanguage(lang)) {
			try {
				return highlight.highlight(lang, str).value
			} catch (__) {}
		}
		return '' // 使用额外的默认转义
	},
})

const result = markdown.render(data?.article_info?.mark_content)
post.value = result
</script>

<style lang="scss" scoped>
.view {
	position: relative;
	.article {
		background-color: #fff;
		border-radius: 4px 4px 0 0;
		padding: 32px;
		padding-bottom: 0;
		width: 820px;
		box-sizing: border-box;
		.article-title {
			margin-top: 0;
			font-size: 32px;
		}
		.author-info-box {
			display: flex;
			min-width: 0;
			flex-grow: 1;
			.author-name {
				height: 2rem;
				display: flex;
				align-items: center;
				.username {
					font-size: 14px;
					font-weight: 500;
					color: var(--primary-color);
					line-height: 2rem;
					cursor: pointer;
					&:hover {
						color: var(--link-color);
					}
				}
			}
			.meta-box {
				font-size: 14px;
				color: var(--article-desc-color);
				line-height: 22px;
				display: flex;
				align-items: center;
				.time {
					letter-spacing: 1px;
					margin-left: 16px;
				}
				.read-icon {
					margin-left: 16px;
					margin-right: 5px;
				}
			}
		}
		.article-content {
			:deep(img) {
				max-width: 100%;
			}
		}
	}
	.sidebar {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 25rem;
	}
}
</style>
