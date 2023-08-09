<template>
	<div class="views">
		<div class="index-nav">
			<navigation-sidebar :list="pinsBriefs" />
		</div>
		<div class="stream">
			<div class="stream-wrapper">
				<div class="pin-list-view">
					<div class="pin-list-wrap">
						<client-only>
							<ul class="pin-list">
								<li v-for="item in pins" :key="item.msg_id" class="item">
									<pin-item :item-info="item" />
								</li>
							</ul>
						</client-only>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar">ttttttttttttttttttt</div>
	</div>
</template>
<script lang="ts" setup>
import { getShortMsg } from '@/api/user'
const pinsBriefs = [
	{
		category_name: '最新',
		category_url: 'news',
	},
	{
		category_name: '热门',
		category_url: 'hot',
	},
	{
		category_name: '推荐圈子',
		category_url: 'club',
	},
]

const pins = ref<Array<any>>([])
const getShortMsgFn = async () => {
	const { data } = await getShortMsg('hot', 200)
	pins.value = data
}
getShortMsgFn()
</script>
<style lang="scss" scoped>
.views {
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
	.stream {
		width: 720px;
		max-width: 100%;
		flex-shrink: 0;
		margin-right: 20px;
		.pin-list {
			position: relative;
			.item {
				background-color: var(--navbar-background-color);
				margin-bottom: 8px;
			}
		}
	}
	.sidebar {
		width: 260px;
		flex: 1;
		background-color: var(--navbar-background-color);
	}
}
</style>
