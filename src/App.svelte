<style>
h1 {
	margin-bottom: 2rem;
	padding: 0 1rem;
}

.contact-button {
	margin-top: 2rem;
}

.left, .right, header {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
}

header p {
	max-width: 28rem;
	text-align: center;
	padding: 0 1rem;
}

.left {
	background: linear-gradient(to bottom right, white, #fafafa);
	width: 100%;
	min-height: calc(100vh - 3rem);
	margin-top: 3rem;
	padding: 2rem 0;
}

.right section {
	min-height: calc(100vh - 3rem);
}

section {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 1rem;
	max-width: 100vw;
}

.profile-picture {
	width: 13rem;
	height: auto;
	-webkit-mask-image: url('../images/circle.svg');
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-size: 100%;
	mask-image: url('../images/circle.svg');
	mask-repeat: no-repeat;
	mask-size: 100%;
	margin-bottom: 2rem;
}

#services ul {
	display: flex;
	flex-flow: column;
	align-items: center;
}

#services li {
	width: 35rem;
	max-width: calc(100vw - 2rem);
}

.service {
	margin-top: 3rem;
	display: flex;
	flex-flow: column;
	align-items: center;
}

.service h2 {
	margin-bottom: 0.5rem;
	text-align: center;
}

.service img {
	grid-area: icon;
	width: 5rem;
	height: auto;
	margin-bottom: 1rem;
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
		border-right: 1px #e7e7e7 solid;
	}

	.right {
		grid-column: 2 / 3;
	}

	.right section {
		min-height: calc(100vh - 3rem);
	}

	.service {
		display: grid;
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(2, auto);
		grid-template-areas:
			"icon heading"
			"icon description"
		;
	}

	.service img {
		grid-area: icon;
		width: 6rem;
		height: auto;
		margin-right: 2rem;
		align-self: start;
	}

	.service h2 {
		text-align: left;
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
			<h1>Hello, I'm Johann!</h1>
			<img src="images/profile-picture-500x500.webp" alt="Johann Miller" class="profile-picture">
			<p>
				I'm a web developer and designer in Columbus, Ohio currently doing freelance work.
			</p>
			<a href="/#contact" role="button" class="contact-button">Contact</a>
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
		<section id="services">
			<h1>What I can do for you</h1>
			<ul>
				<li class="service">
					<img src="images/webpage-icon.svg" alt="Webpage">
					<h2>Design your website</h2>
					<p>
						You need a website, and I know how to make them.  I'll design the layout, graphics, and other visual
						aspects to bring you a modern and engaging online presence.
					</p>
				</li>
				<li class="service">
					<img src="images/gear-icon.svg" alt="Gear">
					<h2>Add functionality</h2>
					<p>
						Features don't program themselves!  I turn 1s and 0s into databases, APIs, or whatever else you can think of
						to make your site more than a static page.
					</p>
				</li>
				<li class="service">
					<img src="images/cloud-icon.svg" alt="Cloud">
					<h2>Deploy</h2>
					<p>
						"How do I put my website on the internet?" is a question you won't have to worry about.  I deploy
						the site for you, leaving more time to focus on your project, while I handle the rest.
					</p>
				</li>
			</ul>
		</section>
		<section id="contact">
			<h1>Contact</h1>
			<ContactForm />
		</section>
	</div>
</main>