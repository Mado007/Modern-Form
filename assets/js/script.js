var visToggle = document.querySelector('.fa-eye-slash');
var input = document.querySelector('#pwdWrap input');
var password= true;

visToggle.addEventListener('click', function(){
  if(password) {
      input.setAttribute('type','text');
      visToggle.classList.remove('fa-eye');
      visToggle.classList.add('fa-eye-slash');
  } else {
      input.setAttribute('type','password');
      visToggle.classList.remove('fa-eye-slash');
      visToggle.classList.add('fa-eye');
  }
password = !password;
});

var usernameInput = document.getElementById("username");
var lengthRequirement = document.getElementById("lengthRequirement");
var charRequirement = document.getElementById("charRequirement");

usernameInput.onkeyup = function () {
  var validLength = usernameInput.value.length >= 3;
  var validChars = /^[a-zA-Z0-9]+$/.test(usernameInput.value);

  if (validLength) {
    lengthRequirement.classList.add("valid");
    lengthRequirement.classList.remove("invalid");
  } else {
    lengthRequirement.classList.add("invalid");
    lengthRequirement.classList.remove("valid");
  }

  if (validChars) {
    charRequirement.classList.add("valid");
    charRequirement.classList.remove("invalid");
  } else {
    charRequirement.classList.add("invalid");
    charRequirement.classList.remove("valid");
  }
};
const emailInput = document.getElementById("email");
const emailRequirement = document.getElementById("emailRequirement");

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;
  
  const validEmailPattern = /^[\w.-]{3,20}@([\w-]+\.)+[\w-]{2,4}$/;
  if (validEmailPattern.test(emailValue)) {
    emailRequirement.classList.add("valid");
    emailRequirement.classList.remove("invalid");
  } else {
    emailRequirement.classList.add("invalid");
    emailRequirement.classList.remove("valid");
  }
});

var passwordInput = document.getElementById("password");
var lengthPasswordRequirement = document.getElementById("lengthPasswordRequirement");
var uppercaseRequirement = document.getElementById("uppercaseRequirement");

passwordInput.onkeyup = function () {
  var validLength = passwordInput.value.length >= 8 && passwordInput.value.length <= 100;
  var validUppercase = /[A-Z]/.test(passwordInput.value);

  if (validLength) {
    lengthPasswordRequirement.classList.add("valid");
    lengthPasswordRequirement.classList.remove("invalid");
  } else {
    lengthPasswordRequirement.classList.add("invalid");
    lengthPasswordRequirement.classList.remove("valid");
  }

  if (validUppercase) {
    uppercaseRequirement.classList.add("valid");
    uppercaseRequirement.classList.remove("invalid");
  } else {
    uppercaseRequirement.classList.add("invalid");
    uppercaseRequirement.classList.remove("valid");
  }
};
var phoneInput = document.getElementById("phoneNumber");
var lengthPhoneRequirement = document.getElementById("lengthPhoneRequirement");
var numRequirement = document.getElementById("numRequirement");

phoneInput.addEventListener("input", function () {
  var phoneValue = phoneInput.value;

  if (phoneValue.length === 14) {
    lengthPhoneRequirement.classList.add("valid");
    lengthPhoneRequirement.classList.remove("invalid");
  } else {
    lengthPhoneRequirement.classList.add("invalid");
    lengthPhoneRequirement.classList.remove("valid");
  }

  if (/^(011|012|015)/.test(phoneValue)) {
    numRequirement.classList.add("valid");
    numRequirement.classList.remove("invalid");
  } else {
    numRequirement.classList.add("invalid");
    numRequirement.classList.remove("valid");
  }
});
