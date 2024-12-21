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
var emailInput = document.getElementById("email");
var emailRequirement = document.getElementById("emailRequirement");

emailInput.addEventListener("input", function () {
  var emailValue = emailInput.value;
  
  var validEmailPattern = /^[\w.-]{3,20}@([\w-]+\.)+[\w-]{2,4}$/;
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

  if (phoneValue.length === 11) {
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
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  var genderSelected = document.querySelector('input[name="gen"]:checked');
  var genderErrorMessage = document.getElementById("genderError");

  if (!genderSelected) {
    genderErrorMessage.textContent = "*You must select a gender.";
    return;
  } else {
    genderErrorMessage.textContent = "";
  }

  var checkboxes = document.querySelectorAll(".language-options input[type='checkbox']");
  var errorMessage = document.getElementById("languageError");
  var selectedLanguages = 0;

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedLanguages++;
      }
  });

  if (selectedLanguages < 2) {
      errorMessage.textContent = "*You must select at least two languages.";
      return;
  } else {
      errorMessage.textContent = "";
  }

  var username = document.getElementById("username").value;

  var personalizedMessage = document.getElementById("personalizedMessage");
  personalizedMessage.textContent = `Hello, ${username}! Thank you for registering.`;

  document.querySelector(".form").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
});
