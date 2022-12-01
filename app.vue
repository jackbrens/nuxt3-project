<template>
	<div>
		<NuxtLink to="/">首页</NuxtLink>
		<NuxtLink to="/post/123">详情页（固定传参）</NuxtLink>
		<NuxtLink :to="{ name: 'post-id', params: { id } }">详情页（动态传参）</NuxtLink>
		<button @click="toPostDetail">详情页（路由传参）</button>
		<NuxtPage />
<!--		<ul>-->
<!--			<li v-for="(item, index) in data" :key="index">-->
<!--				{{ item.item_info.author_name ?? item.item_info.author_user_info.user_name }}-->
<!--			</li>-->
<!--		</ul>-->
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const id = ref<number>(456)
const toPostDetail = () => {
	router.push({ name: 'post-id', params: { id: id.value } })
}
// const { data } = await useFetch('/api/count')
// console.log(data)

// const { data } = await getRecommend()
// console.log(data)

</script>

<style lang="scss" scoped>
div {
	color: $theme-color;
}
</style>
