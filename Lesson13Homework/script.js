function submitData() {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let result = document.getElementById("result");

  
  let usernameValidator = /^[a-zA-Z0-9_-]{3,16}$/;

  let splitted = email.value.split("@");

  let emailValidator = /^(?=.{5,254}$)[a-z0-9._+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  let passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;


  if (usernameValidator.test(username.value) === false) {
    result.style.color = "red";
    result.textContent = "username validation failed";
  }

  if (
    emailValidator.test(email.value) === false ||
    splitted[0] !== username.value.toLowerCase()
  ) {
    result.style.color = "red";
    result.textContent = "email validation failed";
  }

  if (passwordValidator.test(password.value) === false) {
    result.style.color = "red";
    result.textContent = "Password validation failed";
  }

  if (
    passwordValidator.test(password.value) === true &&
    usernameValidator.test(username.value) === true &&
    emailValidator.test(email.value) === true &&
    splitted[0] === username.value.toLowerCase()
  ) {
    result.style.color = "green";
    result.innerHTML = "Successfully registered";
  }
}
