<template>
	<HeroImage :mainText="nameWebsite" />
    <div style="min-height:100vh;"></div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
export default {
    name: "MainPage",
    components:{
        HeroImage
    },
    data(){
        return{
            nameWebsite: "Car Workshop",
        }
    },
}
</script>

<style lang="scss" scoped></style>
