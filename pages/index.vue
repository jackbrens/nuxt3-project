<template>
	<div>
		<h1>首页</h1>
		<el-button type="primary">Primary</el-button>
		<el-button :icon="Search" circle />
	</div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped></style>
