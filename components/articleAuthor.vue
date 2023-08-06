<template>
	<div class="article-author">
		<a class="user-item">
			<div class="avatar">
				<img
					loading="eager"
					src="https://p6-passport.byteacctimg.com/img/user-avatar/7108f7af93ea763fe97bdf7fdc6b2651~100x100.awebp"
					alt="avatar"
					class="avatar-img"
				/>
			</div>
			<div class="info-box">
				<span class="username">
					<span class="name">{{ props.userinfo.user_name }}</span>
					<span class="rank">lv：{{ props.userinfo.level }}</span>
				</span>
				<div class="position">{{ props.userinfo.job_title }}</div>
			</div>
		</a>
		<div class="stat-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan">
				<g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
					<ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57"></ellipse>
					<path
						fill="#7BB9FF"
						d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
					></path>
				</g>
			</svg>
			<span class="content">&nbsp; 获得点赞 &nbsp;{{ props.userinfo.got_digg_count }}</span>
		</div>
		<div class="stat-item">
			<svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
				<g fill="none" fill-rule="evenodd">
					<circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
					<path
						fill="#7BB9FF"
						d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
					></path>
				</g>
			</svg>
			<span class="content">&nbsp; 文章被阅读 &nbsp;{{ props.userinfo.got_view_count }}</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps({
	userinfo: {
		type: Object,
		default: () => ({}),
	},
})
</script>
<style lang="scss" scoped>
.article-author {
	border-radius: 4px;
	background: var(--primary-background-color);
	padding: 16px 20px;
	margin-bottom: 20px;
	.user-item {
		display: flex;
		align-items: center;
		padding-bottom: 1.416rem;
		.avatar {
			flex: 0 0 auto;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			.avatar-img {
				border-radius: 50%;
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
				background-color: var(--juejin-gray-3);
			}
		}
		.info-box {
			flex: 1 1 auto;
			min-width: 0;
			margin-left: 1.333rem;
			.username {
				display: flex;
				align-items: center;
				font-size: 1.333rem;
				font-weight: 500;
				line-height: 2rem;
				color: var(--primary-color);
				white-space: pre-wrap;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				.name {
					display: inline-block;
					vertical-align: top;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.rank {
					font-size: 12px;
					font-weight: 600;
					line-height: 1;
					display: flex;
					align-items: center;
					margin-left: 0.33rem;
					vertical-align: middle;
					background-color: var(--link-color);
					color: #fff;
					border-radius: 4px;
					padding: 0.3rem 0.5rem;
				}
			}
		}
	}
	.stat-item {
		margin-top: 0.667rem;
		display: flex;
		align-items: center;
		.content {
			font-size: 1.167rem;
			color: var(--primary-color);
			font-weight: 400;
		}
	}
}
</style>
