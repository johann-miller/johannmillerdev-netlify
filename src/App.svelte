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

#services ul {
	display: flex;
	flex-flow: column;
	align-items: center;
}

#services li {
	width: 38rem;
	max-width: calc(100vw - 2rem);
}

.service {
	margin-top: 2rem;
	display: flex;
	flex-flow: column;
	align-items: center;
}

.service h2 {
	text-align: center;
	line-height: 1.5;
}

.service img {
	grid-area: icon;
	width: 8rem;
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
		align-items: center;
		justify-content: center;
	}

	.service:not(:first-child) {
		margin-top: 5rem;
	}

	.service:nth-child(even) {
		grid-template:
			"heading icon"
			"description icon"
		;
	}

	.service img {
		grid-area: icon;
		width: 10rem;
		height: auto;
		margin: 0 2rem 0 0;
	}

	.service:nth-child(even) img {
		margin-right: 0;
		margin-left: 2rem;
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
		<section id="services">
			<h1>What I can do for you</h1>
			<ul>
				<li class="service">
					<img src="images/webpage.svg" alt="Webpage">
					<h2>Design your website</h2>
					<p>
						You need a website, and I know how to make them.  I'll design the layout, graphics, and other visual
						aspects to bring you a modern and engaging online presence.
					</p>
				</li>
				<li class="service">
					<img src="images/gear.svg" alt="Gear">
					<h2>Add functionality</h2>
					<p>
						Features don't program themselves!  I turn 1s and 0s into databases, APIs, or whatever else you can think of
						to make your site more than a static page.
					</p>
				</li>
				<li class="service">
					<img src="images/cloud.svg" alt="Cloud">
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