<template>
	<div class="container index-container">
		<top-header />
		<main class="main-container">
			<slot />
		</main>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.index-container {
	max-width: 1200px;
}
.container {
	position: relative;
	margin: 0 auto;
	width: 100%;
}
.main-container {
	margin-top: 1.62rem;
}
</style>
