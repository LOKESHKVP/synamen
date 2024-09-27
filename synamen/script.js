const form = document.getElementById("contact-form");
let valid = true;
form.addEventListener("click", (event) => {

  validateName(form, event);
  validateEmail(form, event);
  validatePhone(form,event);
  validateMessage(form,event);

  if(valid){
    email.js.send()
  }
});

function validateName(form, event) {
  const name = document.getElementById("name");
  let nameError = document.getElementById("nameError");
  if (name.value == '') {
    nameError.innerHTML = "Name Required";
    nameError.style.display = "block";
    event.preventDefault();
    valid = false;
  } else {
    nameError.style.display = "none";
  }
}

function validateEmail(form, event) {
  const email = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  if (email.value == '') {
    emailError.innerHTML = "Email is Required";
    emailError.style.display = "block";
    event.preventDefault();
    valid = false;
  } else {
    const emailCheck = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (email.value.match(emailCheck)) {
      emailError.style.display = "none";
    } else {
      emailError.innerHTML = "Please Enter Valid Email";
      emailError.style.display = "block";
      event.preventDefault();
      valid = false;
    }
  }
}

function validatePhone(form,event){
  const phone=document.getElementById("phone");
  let phoneError = document.getElementById("phoneError")
  if(phone.value ==''){
    phoneError.innerHTML = "Phone Number Required";
    phoneError.style.display="block";
    valid = false;
    event.preventDefault();
  }else{
    let phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phoneCheck)){
      phoneError.style.display = "none"
    }else{
      phoneError.innerHTML = "phone Number is Not Valid";
      valid = false;
      event.preventDefault();
    }
  }
}
function validateMessage(form,event){
  const message = document.getElementById("message");
  let messageError =document.getElementById("message-Error");
  if(message.value==''){
    messageError.innerHTML = "Message Should Not be Empty";
    messageError.style.display = "block";
    valid = false;
  }else{
    messageError.style.display ="none";
    event.preventDefault();
  }
}

