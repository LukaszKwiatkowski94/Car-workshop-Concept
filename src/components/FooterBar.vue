<template>
	<footer class="footer">
		<div class="footer__info-box"></div>
		<div class="footer__year-box">
			<p class="footer__year-text">&copy; {{ year }} Car Workshop</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterBar",
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	&__info-box {
		background-color: #FFCB42;
		min-height: 60vh;
	}
	&__year-box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		bottom: 0;
		min-height: 60px;
		background-color: #ffb200;
	}

	&__year-text {
		font-size: 1.6rem;
	}
}
</style>
