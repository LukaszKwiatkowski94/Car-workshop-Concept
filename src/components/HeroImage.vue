<template>
	<header class="hero-image">
        <h1 class="hero-image__header">
            {{mainText}}
        </h1>   
    </header>
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
$hero-linear-gradient : linear-gradient(90deg, rgba(39,123,192,0.5) 50%, rgba(39,123,192,0.5) 50%);
.hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    padding: 1em;
    background-image: $hero-linear-gradient, url('../assets/hero-header-mini.jpg');
    background-position: center;
	background-size: cover;
    background-attachment: fixed;
    &__header{
        color: #FFB200;
        font-size: 4.8rem;
        letter-spacing: 5px;
        text-shadow: 0 0 10px #000;
    }
}
@media (min-width: 576px){
    .hero-image{
        &__header{
            font-size: 6.4rem;
        }
    }
}

@media (min-width: 768px){
    .hero-image{
        &__header{
            font-size: 7.2rem;
        }
    }
}
    
@media (min-width: 992px){
    .hero-image{
        background-image: $hero-linear-gradient, url('../assets/hero-header-big.jpg');
        &__header{
            font-size: 9.2rem;
        }
    }
}
</style>
