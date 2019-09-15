exports.handler = function(event, context, callback){
  const API_KEY = process.env.API_KEY
  const DOMAIN = "mail.johannmiller.dev"
  const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN})

  var {name, email, message} = JSON.parse(event.body)
  var sendError = false
  var status = 200

  // sanitizeString is for XSS prevention.  This is ONLY safe inside a tag.  Do not place in attributes.
  function sanitizeString(string) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
    };
    const reg = /[&<>]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

  // sendEmail sends an email and returns a boolean to the client if there was an error
  async function sendEmail(data) {
    await mailgun.messages().send(data, (error, body) => {
      if (error != undefined) {
        sendError = true
        status = 500
      }
    })
  }

  name = sanitizeString(name)
  email = sanitizeString(email)
  message = sanitizeString(message)

  // Check if the sanitized strings are empty
  let empty = [null, '']

  if (empty.includes(name) || empty.includes(email) || empty.includes(message)) {
    sendError = true
    status = 400

    callback(null, {
      statusCode: status,
      body: JSON.stringify({sendError: sendError})
    })
  }

  let myData = {
    from: 'noreply@mail.johannmiller.dev',
    to: 'johann.miller@protonmail.com',
    subject: 'New message from ' + name,
    text: name + ' (' + email + ') wants to get in touch! \n\n' + message
  }

  let clientData = {
    from: 'noreply@mail.johannmiller.dev',
    to: email,
    subject: 'Your message was sent!',
    text: 'Hello ' + name + ", \n\n This is a confirmation that your email to me was successful.  I look forward to getting in touch! \n\n This is an automated message"
  }

  sendEmail(myData)

  if (!sendError) {
    sendEmail(clientData)
  }

  callback(null, {
    statusCode: status,
    body: JSON.stringify({sendError: sendError})
  })
}