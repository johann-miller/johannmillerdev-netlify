<style>
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
	background: #f7f7f7;
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
	padding-bottom: 2rem;
	border-bottom: 1px #306 solid; 
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
	header h1 {
		font-size: 4.5rem;
	}

	header p {
		padding: 0;
	}

	header {
		border-image: url('../images/border.svg') 30 round;
		border-image-width: 15rem;
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
			<p>
				I work with people in Columbus, Ohio to give their ideas modern websites with a great user experience.  If that sounds
				like something I can help you with, let's get in touch!
			</p>
			<a href="/#contact" role="button" class="contact-button">Contact</a>
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