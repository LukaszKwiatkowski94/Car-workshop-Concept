<template>
	<section class="section contact">
		<h2 class="section__header">Contact</h2>
		<div class="contact__box">
			<div class="contact__form">
				<form @submit.prevent="submitMessage">
					<label for="name" class="contact__label">Your name:</label>
					<input type="text" v-model="name" name="name" class="contact__input" placeholder="Please enter your name" required/>
					<label for="surname" class="contact__label">Your surname:</label>
					<input type="text" v-model="surname" name="surname" class="contact__input" placeholder="Please enter your last name" required/>
					<label for="email" class="contact__label">Your e-mail:</label>
					<input type="mail" v-model="mail" name="email" class="contact__input"  placeholder="Please enter your e-mail address" required/>
					<label for="message" class="contact__label">Your message:</label>
					<textarea v-model="message" class="contact__textarea"  placeholder="Write your message" required/>
					<button type="submit" class="contact__btn">SEND</button>
				</form>
			</div>
			<div class="contact__map">
				<div class="mapouter">
					<div class="gmap_canvas">
						<iframe
							width="100%"
							height="100%"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=423%20Millbank,%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
						></iframe
						><a href="https://fmovies-online.net"></a><br /><a
							href="https://www.embedgooglemap.net"
							>google html code</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ContactSection",
	data(){
		return{
			name:"",
			surname:"",
			mail:"",
			message:""
		}
	},
	methods:{
		submitMessage(){
			alert(`${this.name} ${this.surname} your message was sent successfully. Wait for a reply on ${this.mail}`);
			this.name="";
			this.surname="";
			this.mail="";
			this.message="";
		}
	},
};
</script>

<style lang="scss" scoped>
.contact {
	&__box {
		display: flex;
		flex-direction: column;
	}
	&__form {
		form {
			display: flex;
			flex-direction: column;
		}
	}
	&__label {
		margin: 1em 0 0.5em;
		font-size: 1.8rem;
		text-align: left;
		font-weight: bold;
		letter-spacing: 2px;
	}
	&__input,
	textarea {
		padding: 0.5em;
		font-size: 1.8rem;
		border-radius: 1em;
		&:focus {
			outline-color: #277bc0;
		}
	}
	textarea {
		resize: vertical;
		min-height: 20vh;
	}
    &__btn{
        margin-top: 0.5em;
        padding: 1em 2em;
        font-size: 1.8rem;
        letter-spacing: 3px;
        font-weight: bold;
        border-radius: 1em;
        background-color: #FFCB42;
        color: #277bc0;
		cursor: pointer;
    }
	&__map {
		display: flex;
		justify-content: center;
        margin-top: 1em;
		padding: 0 2em;
		align-items: center;
		text-align: center;
	}
}

@media (min-width: 772px) {
	.contact {
		&__box {
			flex-direction: row;
		}
		&__form {
			width: 50%;
		}
		&__map {
			width: 50%;
            margin-top: 0;
		}
	}
}
</style>

<style>
.mapouter {
	position: relative;
	text-align: right;
	height: 100%;
	width: 100%;
}
</style>
<style>
.gmap_canvas {
	overflow: hidden;
	background: none;
	height: 100%;
	width: 100%;
}
</style>
