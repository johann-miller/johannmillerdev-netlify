<style>
h1 {
	margin-bottom: 2rem;
	padding: 0 1rem;
}

.contact-button {
	margin-top: 2rem;
}

.left, .right, header, .top, .bottom {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
}

header {
	flex-grow: 1;
	align-items: stretch;
	width: 100%;
	background: #0784b5;
}

header p {
	max-width: 28rem;
	text-align: center;
	padding: 0 1rem;
}

.top {
	height: 100%;
	flex-grow: 2;
	width: 100%;
	padding: 5rem 2rem;
}

.top h1{
	color: white;
	text-align: left;
	font-weight: bolder;
}

.bottom {
	padding: 8rem 2rem;
	border-top: 1px white solid;
}

.bottom p {
	color: white;
	font-weight: 400;
}

.bottom a {
	background: #0784b5;
	color: white;
	border: 2px white solid;
}

.left {
	width: 100%;
	margin-top: 3rem;
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
	main {
		display: grid;
		grid-template-columns: 30vw calc(100% - 30vw);
		align-items: start;
	}

	.left {
		grid-column: 1 / 2;
		position: sticky;
		margin-top: 0;
		min-height: 100vh;
		top: 0;
	}

	.right {
		grid-column: 2 / 3;
	}

	.right section {
		min-height: calc(100vh - 3rem);
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
	<div class="left">
		<header id="about-me">
			<div class="top">
				<h1>Johann<br>Miller<br>Developer<br>& Designer</h1>
			</div>
			<div class="bottom">
				<p>
					I'm a web developer and designer in Columbus, Ohio currently doing freelance work.
				</p>
				<a href="/#contact" role="button" class="contact-button">Contact</a>
			</div>
		</header>
	</div>
	<div class="right">
		<Navbar />
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
	</div>
</main>