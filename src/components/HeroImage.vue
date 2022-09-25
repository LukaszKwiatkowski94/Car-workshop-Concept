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

<style lang="scss" scoped>
.hero-image{
    $hero-linear-gradient : linear-gradient(90deg, rgba(39,123,192,0.5) 50%, rgba(39,123,192,0.5) 50%);
    min-height: 100vh;
    background-image: $hero-linear-gradient, url('../assets/hero-header-mini.jpg');
    background-position: center;
	background-size: cover;
}
</style>
