<template>
	<main>
		<AboutSection />
	</main>
</template>

<script>
import AboutSection from "@/components/AboutSection.vue";

export default {
	components: {
		AboutSection,
	},
	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>
