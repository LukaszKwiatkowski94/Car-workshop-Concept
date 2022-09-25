<template>
	<footer class="footer">
		<div class="wrapper">
			<div class="footer__info-box">
				<div class="footer__logo">
					<img src="../assets/logo.png" alt="Logo Vue JS" />
					<p class="footer__info-text footer__info-text--strong">
						Car Workshop
					</p>
					<p class="footer__info-information">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						rhoncus orci arcu, eget faucibus lectus elementum sit amet. Donec a
						tortor nec magna tincidunt convallis eu vitae arcu. Aliquam semper
						ex sem, id sollicitudin eros dictum non. Interdum et malesuada fames
						ac ante ipsum primis in faucibus. Sed vitae suscipit leo. Nullam
						molestie est a quam rhoncus, sit amet fringilla ipsum aliquam.
						Mauris dui ante, laoreet et pretium at, euismod vel sapien.
					</p>
				</div>
				<div class="footer__contact">
					<h2 class="footer__header">Contact</h2>
					<ul class="footer__list">
						<li class="footer__list-item footer__list-item--address">
							<address>
								<p>Car Workshop</p>
								<p>Millbank 44</p>
								<p>00-000 London</p>
							</address>
						</li>
						<li class="footer__list-item footer__list-item--telephone">
							tel: +99 999 999 999
						</li>
						<li class="footer__list-item footer__list-item--telephone">
							Vulcanization: +99 999 999 999
						</li>
						<li class="footer__list-item footer__list-item--telephone">
							Car wash: +99 999 999 999
						</li>
					</ul>
				</div>
				<div class="footer__opening-hours">
					<h2 class="footer__header">Opening hours</h2>
					<ul class="footer__list">
						<li class="footer__list-item">
							monday - friday: 8:00 AM - 7:00 PM
						</li>
						<li class="footer__list-item">saturday: 10:00 AM - 4:00 PM</li>
						<li class="footer__list-item">sunday: closed</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer__year-box">
			<p class="footer__year-text">&copy; {{ year }} Car Workshop</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterBar",
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	background-color: #ffcb42;
	&__info-box {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: repeat(3, 1fr);
		gap: 1em;
		min-height: 60vh;
		padding: 2em;
	}
	&__logo {
		grid-row: 1/2;
		grid-column: 1/-1;
	}
	&__contact {
		grid-row: 2/3;
		grid-column: 1/-1;
	}
	&__opening-hours {
		grid-row: 3/4;
		grid-column: 1/-1;
	}
	&__info-text{
		text-align: justify;
		font-size: 2.0rem;
	}
	&__info-text {
		font-size: 1.8rem;
		&--strong{
			font-weight: bold;
			letter-spacing: 2px;
		}
	}
	&__info-information{
		font-size: 1.6rem;
		line-height: 1.8em;
		text-align: justify;
	}
	&__header{
		text-transform: uppercase;
		font-size: 2.2rem;
		font-weight: bold;
		text-align: left;
	}
	&__list{
		margin: 1em 2em;
		text-align: left;
		font-size: 1.6rem;
	}


	&__year-box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		bottom: 0;
		min-height: 60px;
		background-color: #ffb200;
	}
}

@media (min-width: 768px) {
	.footer {
		&__contact {
			grid-row: 2/4;
			grid-column: 1/2;
		}
		&__opening-hours {
			grid-row: 2/4;
			grid-column: 2/4;
		}
	}
}

@media (min-width: 992px) {
	.footer {
		&__logo {
			grid-row: 1/4;
			grid-column: 1/2;
		}
		&__contact {
			grid-row: 1/4;
			grid-column: 2/3;
		}
		&__opening-hours {
			grid-row: 1/4;
			grid-column: 3/4;
		}
	}
}
</style>
