let formulario = document.querySelector(".contact-form");

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errorFullName = document.querySelector(".fullName");
let errorEmail = document.querySelector(".email");
let errorPhone = document.querySelector(".phone");
let errorPassword = document.querySelector(".password");

let emptyErrorMessage = "Por favor complete el campo";



let erroresBool = false;


formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (fullName.value == "") {
    
    errorFullName.style.display = "block";  
    errorFullName.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorFullName.style.display = "none";
  }
  if (email.value == "") {
    errorEmail.style.display = "block";
    errorEmail.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorEmail.style.display = "none";
  }
  
  if (password.value == "") {
    errorPassword.style.display = "block";
    errorPassword.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorPassword.style.display = "none";
  }
  

  if (erroresBool == false) {
    this.submit();
  }
});


