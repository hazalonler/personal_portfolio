const email = new URLSearchParams(window.location.search);

const submittedEmail = email.get('email-input');

const submittedMessage = `Thanks for your submission ${submittedEmail}!`;

const message = document.getElementById('message');

message.innerHTML = message;