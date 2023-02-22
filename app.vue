<template>
	<div id="themeConfig" :class="themeConfig">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie'
const themeConfig = useCookie<string>('theme-mode')

onMounted(() => {
	themeConfig.value = Cookies.get('theme-mode') || 'light'
})
</script>

<style lang="scss" scoped>
#themeConfig {
	min-height: 100vh;
	background-color: var(--layout-background-color);
}
</style>
