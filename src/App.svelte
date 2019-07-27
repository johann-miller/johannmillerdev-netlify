<style>
h1 {
	margin-bottom: 2rem;
	padding: 0 1rem;
}

.contact-button {
	margin-top: 2rem;
}

header {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	background: #fafafa;
	width: 100%;
	margin-top: 3rem;
	padding: 2rem 0;
}

header p {
	max-width: 22rem;
	text-align: center;
	padding: 0 1rem;
	text-align: center;
}

header h1{
	color: #123;
	text-align: left;
	font-weight: bolder;
	border-bottom: 1px #404e5b solid;
	padding-bottom: 2rem; 
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
	header, section {
		min-height: calc(100vw - 2rem);
		margin-top: 0;
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
				I work with businesses and individuals to give their ideas a modern website with a great user experience.  If that sounds like you,
				let's get in touch!
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