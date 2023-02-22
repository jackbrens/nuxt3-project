<template>
	<div>
		<top-header />
		<main class="main">
			<slot />
		</main>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.main {
	margin: 0 auto;
	padding-top: 120px;
	max-width: 960px;
	box-sizing: border-box;
}
</style>
