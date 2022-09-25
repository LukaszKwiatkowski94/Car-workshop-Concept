<template>
	<section class="section single-offer">
		<h2 class="section__header">{{ offer.name }}</h2>
		<div class="single-offer__box">
			<div class="single-offer__information">
				<h3 class="single-offer__header-two">
					{{ offer.headerTwo }}
				</h3>
				<p class="single-offer__text">
					{{ offer.decription }}
				</p>
			</div>
			<img
				:alt="offer.alt"
				:src="require(`@/assets/${offer.photo}`)"
				class="single-offer__photo"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: "SingleOffer",
	props: {
		offer: {
			type: Object,
			require: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.single-offer {
	&__box {
		display: flex;
		flex-direction: column;
	}
	&__information {
		margin: 1em auto;
	}
	&__header-two {
		font-size: 2.4rem;
		font-weight: bold;
		margin-bottom: 1em;
	}
	&__text {
		font-size: 1.8rem;
		text-align: justify;
	}
	&__photo {
		width: 100%;
	}
}
@media (min-width: 768px) {
	.single-offer {
		&__box {
			flex-direction: row;
		}
		&__photo {
			margin-left: 2em;
			width: 40%;
		}
	}
}
@media (min-width: 992px) {
	.single-offer {
		&__header-two {
			font-size: 2.8rem;
		}
		&__text {
			font-size: 2.2rem;
			text-align: justify;
		}
		&__photo {
			width: 50%;
		}
	}
}
</style>
