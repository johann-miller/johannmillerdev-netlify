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
}

.note {
	max-width: 96vw;
	margin-top: 2rem; 
	padding: 0 1rem;

	text-align: center;
}

form {
	width: 30rem;
	max-width: 95vw;
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
let nameError = null
let emailError = null
let messageError = null

// Message texts
let errorMessage = 'There was an error sending your message.  Please email me directly at johann@johannmiller.dev'
let successMessage = 'Your message was sent.  A confirmation will be emailed to you shortly.'

// showFeedback toggles a css class
let showFeedback = false;

// Form validation functions
function validateName() {
	if (name == null || name == '') {
		nameError = "Please enter a name"
	} else {
		nameError = ''
	}
}

function validateEmail() {
	var regex = /\S+@\S+\.\S+/

	if (!regex.test(email)) {
		emailError = "Please enter a valid email"
	} else {
		emailError = ''
	}
}

function validateMessage() {
	if (message == null || message == '') {
		messageError = "Please enter a message"
	} else {
		messageError = ''
	}
}

// sendEmail sends an email if the form passes validation
function sendEmail() {
	validateName();
	validateEmail();
	validateMessage();

	// If the form is validated, tell the server to send an email, and provide feedback if there was an error
	if (nameError == '' && emailError == '' && messageError == '') {
		fetch('https://johannmiller.dev/send-email', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name: name, email: email, message: message})
		})

		// turn the HTTP response into text
		.then(response => response.text())

		// Parse the JSON data returned
		.then(data => {
			let parsed = JSON.parse(data)

			// If there was an error sending the email or not, set the status message appropriately
			if (parsed.sendError) {
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
		})
		.catch(() => {
			statusMessage = errorMessage
			sendError = true
			showFeedback = true
		})
	}
}

// returnForm clears the reponse status message, triggering appropriate DOM elements to be rendered
function returnForm() {
	showFeedback = false;
}
</script>

<div class="contact form">
		<div class="form-section-container" class:show-feedback="{showFeedback}" transition:fade="{{duration: 100}}">
			<form action="" onsubmit="event.preventDefault()">
			<label for="name">
				Name
					{#if nameError}
						<span class="error" transition:fade="{{duration: 100}}">{nameError}</span>
					{/if}
			</label>
			<input type="text" name="name" bind:value="{name}" on:blur="{validateName}" required>
			<label for="email">
				Email
					{#if emailError}
						<span class="error" transition:fade="{{duration: 100}}">{emailError}</span>
					{/if}
			</label>
			<input type="email" name="email" bind:value="{email}" on:blur="{validateEmail}" required>
			<label for="name">
				Message
					{#if messageError}
						<span class="error" transition:fade="{{duration: 100}}">{messageError}</span>
					{/if}
			</label>
			<textarea
				name="message"
				oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
				rows="4"
				bind:value="{message}"
				on:blur="{validateMessage}"
				required></textarea>
			<button type="submit" on:click="{sendEmail}">Send</button>
			</form>
			<span class="note">Or email me directly at johann@johannmiller.dev</span>
		</div>
	{#if showFeedback}
		<div class="form-section-container" class:show-feedback="{showFeedback}" transition:fade="{{duration: 100}}">
			<div class="form-feedback" class:send-error={sendError}>
				{#if !sendError}
					<img src="images/check-icon.svg" alt="Check mark">
				{/if}
				{#if sendError}
					<img src="images/cross-icon.svg" alt="X mark">
				{/if}
				<span>{statusMessage}</span>
				<button on:click="{returnForm}">
					Return to form
				</button>
			</div>
		</div>
	{/if}
</div>