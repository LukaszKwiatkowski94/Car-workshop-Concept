<template>
	<section class="section-hero offer">
		<h2 class="section__header">Offer</h2>
		<div class="offer__box">
			<div class="offer__item">
				<img src="../assets/repair.jpg" alt="repair car" class="offer__logo" />
				<h3 class="offer__item-header">Car repair</h3>
				<CustomButton
					class="offer__btn"
					:item="{ title: 'Go to offer', to: '/car-repair' }"
				/>
			</div>
			<div class="offer__item">
				<img src="../assets/tires.jpg" alt="tires" class="offer__logo" />
				<h3 class="offer__item-header">Vulcanization</h3>
				<CustomButton
					class="offer__btn"
					:item="{ title: 'Go to offer', to: '/car-wash' }"
				/>
			</div>
			<div class="offer__item">
				<img src="../assets/wash.jpg" alt="wash car" class="offer__logo" />
				<h3 class="offer__item-header">Car wash</h3>
				<CustomButton
					class="offer__btn"
					:item="{ title: 'Go to offer', to: '/vulcanization' }"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
export default {
	name: "OfferSection",
	components: {
		CustomButton,
	},
};
</script>

<style lang="scss" scoped>
$hero-linear-gradient: linear-gradient(
	90deg,
	rgba(39, 123, 192, 0.5) 50%,
	rgba(39, 123, 192, 0.5) 50%
);
.section-hero {
	width: 100%;
	padding: 1em 2em;
	color: #fff;
}
.offer {
	width: 100%;
	background-image: $hero-linear-gradient, url("../assets/toolbox-key-mini.jpg");
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	&__box {
		display: flex;
		flex-direction: column;
	}
	&__item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin: 1em auto;
	}
	&__logo {
		border-radius: 50%;
		width: 70vw;
		height: 70vw;
	}
	&__item-header {
		margin: 1em auto 0.5em;
		font-size: 3.2rem;
	}
	&__btn {
		margin-bottom: 1.5em;
	}
}
@media (min-width: 768px) {
	.offer {
		&__box {
			flex-direction: row;
			justify-content: space-between;
		}
		&__logo {
			width: 25vw;
			height: 25vw;
		}
	}
}
@media (min-width: 992px) {
	.offer {
		background-image: $hero-linear-gradient,
			url("../assets/toolbox-key-big.jpg");
	}
}
</style>
