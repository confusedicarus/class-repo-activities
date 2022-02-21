var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submissio

  var userInput = {
    //.trim() just removes spaces before and after input
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };
  console.log(userInput);

  // TODO: Set new submission to local storage

  localStorage.setItem("userInput", JSON.stringify(userInput));
});
