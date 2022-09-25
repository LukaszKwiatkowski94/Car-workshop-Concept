<template>
	<HeroImage :mainText="nameWebsite" />
    <ContactSection/>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import ContactSection from '@/components/ContactSection.vue'
export default {
    name: "MainPage",
    components:{
        HeroImage,
        ContactSection,
    },
    data(){
        return{
            nameWebsite: "Car Workshop",
        }
    },
}
</script>

<style lang="scss" scoped></style>
