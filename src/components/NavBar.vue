<template>
	<nav class="nav">
		<div class="nav__logo">
			<img src="@/assets/logo.png" />
			<p class="nav__title">Car Workshop</p>
		</div>
		<div v-show="navMenuIsOpen || windowWidth > 900" class="nav__items">
			<NavBarItem :item="{ title: 'Home', to: '/' }" />
			<NavBarItem :item="{ title: 'Car repair', to: '/car-repair' }" />
			<NavBarItem :item="{ title: 'Vulcanization', to: '/vulcanization' }" />
			<NavBarItem :item="{ title: 'Car wash', to: '/car-wash' }" />
			<NavBarItem :item="{ title: 'Contact', to: '/contact' }" />
		</div>
		<img
			class="nav__menu-bars"
			@click="navMenuIsOpen = true"
			v-show="!navMenuIsOpen"
			src="../assets/menu.svg"
			alt=""
		/>
		<img
			class="nav__menu-bars"
			@click="navMenuIsOpen = false"
			v-show="navMenuIsOpen"
			src="../assets/x.svg"
			alt=""
		/>
	</nav>
</template>

<script>
import NavBarItem from "@/components/NavBarItem.vue";
export default {
	name: "NavBar",
	components: {
		NavBarItem,
	},
	data() {
		return {
			navMenuIsOpen: false,
			windowWidth: window.innerWidth,
		};
	},
	mounted() {
		window.addEventListener('resize', this.onResize);
	},
	methods: {
		onResize(){
			this.windowWidth = window.innerWidth;
		},
	},
};
</script>

<style lang="scss" scoped>
.nav {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: sticky;
	top: 0;
	padding: 0 2em;
	height: 60px;
	background-color: #ffcb42;
	box-shadow: 5px 0 5px #000;
	z-index: 1000;

	&__items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 60px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ffcb42;
	}

	&__logo {
		display: flex;
		align-items: center;
		justify-self: start;
		margin-right: auto;

		img {
			width: 30px;
			margin-right: 1em;
		}
	}
	&__title {
		font-size: 1.6rem;
		width: 50%;
	}
}

@media (min-width: 900px) {
	.nav {
		&__items {
			flex-direction: row;
			position: relative;
			top: 0;
		}
		&__menu-bars {
			display: none;
		}
	}
}
</style>
