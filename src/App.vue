<template>
	<NavBar />
	<router-view />
	<FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
	components: {
		NavBar,
		FooterBar,
	},
};
</script>

<style lang="scss">
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 62.5%;
	font-family: sans-serif;
	scroll-behavior: smooth;
}

.wrapper {
	margin: 0 auto;
	max-width: 1200px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.section {
	margin: 2em auto;
	padding: 0 2em;
	max-width: 1200px;
	&__header {
		margin: 1em auto;
		font-size: 4.2rem;
		text-transform: uppercase;
		letter-spacing: 4px;
	}
}
</style>
