<template>
	<nav class="side-navigator-wrap">
		<div
			v-for="(item, index) in props.list"
			:key="index"
			class="nav-item-warp"
			@click="handleRouter(item.category_url)"
		>
			<div class="nav-item-content" :class="{ 'active-nav': $route.fullPath.includes(item.category_url) }">
				<a class="nav-item">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z"
							fill="currentColor"
						></path>
					</svg>
					<span class="nav-item-text"> {{ item.category_name }} </span>
				</a>
			</div>
		</div>
	</nav>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
	list: {
		type: Array<any>,
		default: () => [],
		required: true,
	},
})

const handleRouter = (tag: string) => {
	router.push({ path: tag })
}
</script>
<style lang="scss" scoped>
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
			&.active-nav {
				background-color: var(--juejin-brand-5-light);
				.nav-item {
					color: var(--link-color);
					svg {
						color: var(--link-color);
					}
				}
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
</style>
