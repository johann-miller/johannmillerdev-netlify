<style>
button[type="submit"] {
	align-self: center;
	margin-top: 1rem;
}

.contact {
	position: relative;
	display: grid;
	justify-items: center;
	align-content: center;
	grid-template-columns: repeat(2, 100%);
	grid-template-rows: 1fr;
	max-width: 100vw;
	
	overflow-x: hidden;
}

.error {
	color: red;
}

.links-container {
	display: flex;
	align-items: center;
	flex-flow: column;
	padding-bottom: 2rem;
	border-bottom: 1px #e7e7e7 solid;
	width: 28rem;
	max-width: 100%;
}

.links li {
	margin-bottom: 1rem;
}

.links a {
	display: flex;
	align-items: center;
	transition: opacity 0.15s ease-in-out;
}

.links a:hover {
	opacity: 0.5;
}

.links a:any-link {
	color: inherit;
}

.links img {
	width: 2rem;
	height: auto;
	margin-right: 1rem;
}

.show-feedback {
	transform: translateX(-100%);
}

.form-section-container {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	transition: all 0.3s ease-in-out;
	padding-top: 2rem;
}

form {
	width: 30rem;
	max-width: 100%;
	padding: 0 1rem;
}

.form-feedback {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	max-width: 25rem;

	color: green;
}

.form-feedback span {
	text-align: center;
	margin: 2rem 0;
}

.feedback-text {
	font-size: 6rem;
	font-weight: 400;
}

.loading {
	position: absolute;
	width: 100%;
	height: calc(100% - 2rem);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	background: rgba(255, 255, 255, 0.9);
}
</style>
<script>
import { fade } from 'svelte/transition';

// variables binded to the form inputs
let name = null
let email = null
let message = null

// response stores information about the server's reponse to sending an email
let statusMessage
let sendError = false

// Errors corresponding to form inputs
let nameError, emailError, messageError = false

// Message texts
let errorMessage = 'There was an error sending your message.  Please email me directly at johann@johannmiller.dev'
let successMessage = 'Your message was sent.  A confirmation will be emailed to you shortly.'

// showFeedback a css class, promise is used for svelte load block
let showFeedback = false
let promise

// Form validation functions
function validateName() {
	if (name == null || name == '') {
		nameError = true
	} else {
		nameError = false
	}

	return nameError
}

function validateEmail() {
	const regex = /\S+@\S+\.\S+/

	if (!regex.test(email)) {
		emailError = true
	} else {
		emailError = false
	}

	return emailError
}

function validateMessage() {
	if (message == null || message == '') {
		messageError = true
	} else {
		messageError = false
	}

	return messageError
}

function submit() {
	promise = sendEmail()
}

// sendEmail sends an email if the user has filled out the form and submitted
async function sendEmail() {

	// Validate form
	if (validateName() || validateEmail() || validateMessage()) {
		return;
	}

	// If the form is validated, tell the server to send an email, and provide feedback if there was an error
	let response = await fetch(`/.netlify/functions/send-email`, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({name: name, email: email, message: message})
	})
	.catch(() => {
		statusMessage = errorMessage
		sendError = true
		showFeedback = true
	})

	// If there was an error, exit
	if (sendError) {
		return
	}

	// Parse response
	response = await response.text()
	response = await JSON.parse(response)

	// If there was an error sending the email or not, set the status message appropriately
	if (response.sendError) {
		statusMessage = errorMessage
		sendError = true
	} else {
		statusMessage = successMessage
		sendError = false

		name = null
		email = null
		message = null

		showFeedback = true;
	}
}

// returnForm clears the response status message, triggering appropriate DOM elements to be rendered
function returnForm() {
	showFeedback = false;
}
</script>

<div class="links-container">
	<ul class="links">
		<li>
			<a target="_blank" href="mailto:johann@johannmiller.dev">
				<img src="/images/envelope.svg" alt="Envelope">
				johann@johannmiller.dev
			</a>
		</li>
		<li>
			<a target="_blank" href="https://twitter.com/johannmiller_">
				<img src="/images/twitter-logo.svg" alt="Twitter">
				@johannmiller_
			</a>
		</li>
	</ul>
</div>
<div class="contact">
	<div class="form-section-container" class:show-feedback="{showFeedback}" transition:fade="{{duration: 100}}">
		<form action="" onsubmit="event.preventDefault()">
		<label for="name">
			Name
				{#if nameError}
					<span class="error" transition:fade="{{duration: 100}}">Please enter a name</span>
				{/if}
		</label>
		<input type="text" name="name" bind:value="{name}" on:blur="{validateName}" required>
		<label for="email">
			Email
				{#if emailError}
					<span class="error" transition:fade="{{duration: 100}}">Please enter a valid email</span>
				{/if}
		</label>
		<input type="email" name="email" bind:value="{email}" on:blur="{validateEmail}" required>
		<label for="name">
			Message
				{#if messageError}
					<span class="error" transition:fade="{{duration: 100}}">Please enter a message</span>
				{/if}
		</label>
		<textarea
			name="message"
			oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
			rows="4"
			bind:value="{message}"
			on:blur="{validateMessage}"
			required></textarea>
		<button type="submit" on:click="{submit}">Send</button>
		</form>
		{#await promise}
			<div class="loading">
				<img src="images/loading.svg" alt="Loading">
			</div>
		{/await}
	</div>
	{#if showFeedback}
		<div class="form-section-container" class:show-feedback="{showFeedback}" transition:fade="{{duration: 100}}">
			<div class="form-feedback" class:send-error={sendError}>
				{#if !sendError}
					<span class="feedback-text">:)</span>
				{/if}
				{#if sendError}
					<span class="feedback-text">:(</span>
				{/if}
				<span>{statusMessage}</span>
				<button on:click="{returnForm}">
					Return to form
				</button>
			</div>
		</div>
	{/if}
</div>