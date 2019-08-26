<style>
@keyframes slide {
	from {right: 100%;}
	to {right: 0;}
}

h1 {
	margin-bottom: 2rem;
	padding: 0 1rem;
}

header, section {
	min-height: calc(100vh - 3rem);
}

header {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 3rem 0;
}

header p {
	max-width: 22rem;
	text-align: center;
	padding: 0 1rem;
	margin-bottom: 2rem;
	text-align: left;
}

header h1{
	text-align: left;
	font-weight: bolder;
	padding: 0 0 1rem 0;
	border-bottom: 1px #221f7e solid; 
	max-width: calc(100% - 2rem);
}

.info-container {
	display: flex;
	flex-flow: column;
	align-items: center;
}

.info-container > * {
	position: relative;
	animation: slide 0.3s ease-in;
}

#contact {
	margin-bottom: 3rem;
}

section {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 1rem;
	max-width: 100vw;
}

main {
	display: flex;
	position: relative;
	display: flex;
	flex-flow: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
}

@media only screen and (min-width: 60rem) {

	@keyframes height {
		from {height: 0;}
		to {height: 100%;}
	}

	header {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: auto;
		justify-items: center;

		min-height: initial;
		width: 60rem;
	}

	header h1 {
		font-size: 4.5rem;
		padding: 2rem;
		margin: 0;
		border: none;
		justify-self: stretch;
		justify-content: center;
		display: flex;
	}

	header p {
		padding: 2rem;
	}

	.info-container {
		justify-content: center;
		width: 100%;
		height: 100%;
		border-left: 1px #221f7e solid;
		animation: height 0.7s ease-in;
		overflow: hidden;	
	}

	.info-container > * {
		animation-duration: 0.7s;
	}

	#contact {
		margin-bottom: initial;
	}
}
</style>

<script>
import Navbar from './components/Navbar.svelte'
import ContactForm from './components/ContactForm.svelte'
</script>

<svelte:head>
	<title>Johann Miller - Web designer - Columbus, Ohio</title>
</svelte:head>

<main>
	<Navbar />
	<header id="about-me">
		<h1>Johann<br>Miller<br>Developer<br>& Designer</h1>
		<div class="info-container">
			<p>
			I work with people in Columbus, Ohio to give their ideas modern websites with a great user experience.  If that sounds
			like something I can help you with, let's get in touch!
			</p>
			<a href="/#contact" role="button" class="contact-button">Contact</a>
		</div>
	</header>
	<section id="portfolio">
		<h1>Portfolio</h1>
		<ul>
			<li class="project">
				In progress
			</li>
		</ul>
	</section>
	<section id="contact">
		<h1>Contact</h1>
		<ContactForm />
	</section>
</main>