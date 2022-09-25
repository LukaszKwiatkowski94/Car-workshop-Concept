<template>
  <MainPage />
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'HomeView',
  components: {
    MainPage
  },
  mounted() {
		window.scrollTo(0, 0);
	},
}
</script>
