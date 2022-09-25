<template>
	<main>
		<ContactSection />
	</main>
</template>

<script>
// @ is an alias to /src
import ContactSection from "@/components/ContactSection.vue";

export default {
	name: "HomeView",
	components: {
		ContactSection,
	},
};
</script>
