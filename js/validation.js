
const email = document.getElementById('email');
const message = document.getElementById('message');


email.addEventListener('blur', valEmail);
message.addEventListener('blur', valMessage);

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valMessage() {
  const re = /[a-zA-Z0-9_-]/;
  if(!re.test(message.value)) {
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }
}
// /^[a-z0-9_-]{3,16}$/
