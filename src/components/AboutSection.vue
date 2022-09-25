<template>
	<section class="section about">
		<h2 class="section__header">About us</h2>
		<div class="about__box">
			<div class="about__information">
				<p class="about__text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut felis
					sapien. Curabitur sed felis mauris. Aenean sed tellus ut nisl
					tristique aliquam. Aliquam orci nunc, aliquet dapibus volutpat eget,
					efficitur nec nibh. Quisque et eleifend eros, nec imperdiet ligula.
					Donec ut dolor magna. Praesent iaculis congue nulla, luctus lacinia
					nibh. Proin a molestie tortor, ac dapibus elit. Pellentesque tristique
					turpis et orci lobortis aliquam. Quisque magna tortor, fringilla eget
					imperdiet a, ultricies ut elit.
				</p>

				<p class="about__text">
					Integer pharetra scelerisque lacus, quis blandit augue aliquet eget.
					Aenean porttitor nulla est, sed tempus felis posuere eu. Pellentesque
					dignissim eleifend ante ut lobortis. Morbi bibendum quam non felis
					auctor, tristique semper enim vestibulum. Proin quis rhoncus ligula.
					Fusce venenatis nulla leo, ac pharetra mi viverra eget. Nam eu
					fringilla tellus, lobortis egestas elit. In aliquam tellus nibh, sed
					feugiat mauris dignissim vel. Pellentesque tempor urna a consequat
					mollis. Nulla lacinia mi non consectetur molestie. Praesent sit amet
					turpis sed neque ullamcorper ultrices. In fringilla nunc eget libero
					faucibus, a condimentum ex faucibus. Nullam rhoncus fringilla neque,
					at congue ex tempor sed.
				</p>
			</div>
			<img
				src="../assets/winter-tires.jpg"
				alt="wheel replacement"
				class="about__photo"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: "AboutSection",
};
</script>

<style lang="scss" scoped>
.about {
	&__box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	&__text{
		margin: 0.5em auto;
		text-align: justify;
		font-size: 1.6rem;
	}
	&__photo {
		margin-top: 1em; 
		width: 100%;
	}
}

@media(min-width:768px){
	.about {
		&__box {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
		&__text{
			padding: 0 1em;
		}
		&__photo {
			margin-top: 0;
			width: 50%;
			clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
		}
	}
}

@media(min-width:992px){
	.about {
		&__text{
			margin-bottom: 2em;
		}
		&__photo {
			
		}
	}
}
</style>
