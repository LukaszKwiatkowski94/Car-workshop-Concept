<template>
	<HeroImage :mainText="nameWebsite" />
    <main>
        <AboutSection/>
        <ContactSection/>
    </main>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
export default {
    name: "MainPage",
    components:{
        HeroImage,
        AboutSection,
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
