<template>
	<router-link :to="item.to">
		<button class="btn">{{ item.title }}</button>
	</router-link>
</template>

<script>
export default {
	name: "CustomButton",
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.btn {
	padding: 1em 2em;
	border: none;
	border-radius: 1em;
	background-color: #277bc0;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 2rem;
	font-weight: bold;
	color: #ffb200;
	transition: background-color 1s, color 1s;
	&:hover {
		background-color: #ffb200;
		color: #277bc0;
        animation: button-animation 1s linear;
	}
}

@keyframes button-animation {
	0% {
        transform: scale(1);
	}
    40% {
        transform: scale(1.2);
    }
    60% {
        transform: scale(1.1);
    }
    80% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
