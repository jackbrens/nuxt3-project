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
	margin: 120px auto 0;
	max-width: 960px;
}
</style>
