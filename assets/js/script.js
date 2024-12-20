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
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

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
