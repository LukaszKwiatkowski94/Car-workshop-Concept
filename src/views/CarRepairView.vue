<template>
    <SingleOffer :offer="{name:name,headerTwo:headerTwo,decription:decription,photo:photo,alt:alt}"/>
</template>

<script>
import SingleOffer from "@/components/SingleOffer.vue";

export default {
	components: {
		SingleOffer,
	},
    data(){
        return{
            name:"Car Repair",
            headerTwo:"How will we repair your car?",
            decription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo urna, rutrum quis tortor non, lobortis tempus velit. Vivamus rhoncus eros dolor, et vulputate sem rhoncus sed. Pellentesque viverra dui arcu, sed lacinia nunc pharetra et. In ac auctor libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam et orci eu augue tempor accumsan posuere eu mi. In tellus nisi, dictum ut nisl a, maximus facilisis nisl. Aenean fermentum sollicitudin urna nec convallis. Suspendisse lobortis arcu vel turpis vulputate, sed egestas nisi volutpat. Ut id dolor suscipit, pulvinar nunc pellentesque, auctor massa.",
            photo:"repair.jpg",
            alt:"repair car"
        };
    },
};
</script>

<style lang="scss" scoped>

</style>