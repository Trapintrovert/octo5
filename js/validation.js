
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const price = document.getElementById('price');



name.addEventListener('blur', valName);
email.addEventListener('blur', valEmail);
address.addEventListener('blur', valPhone);
price.addEventListener('blur', valPrice);

function valName() {
  const re = /^[a-zA-Z\s]{2,20}$/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function valPhone() {
  const re = /^[0-9\-\+]{9,15}$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valPrice(){
  const re = "";
  if(!re.test(address.value)){
    address.classList.add('is-invalid');
  }else{
    address.classList.remove('is-invalid');
  }
}
