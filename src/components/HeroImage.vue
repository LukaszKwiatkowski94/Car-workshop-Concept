<template>
	<header class="hero-image"></header>
</template>

<script>
export default {
	name: "HeroImage",
	props: {
		mainText: {
			type: String,
			require: true,
		},
	},
};
</script>

<style lang="scss" scoped></style>
