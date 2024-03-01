function registerUser() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!fname || !lname || !age || !username || !password) {
    alert("All fields are required. Please fill them out.");
    return;
  }

  let userData = localStorage.getItem("userData");

  let person = {
    fname,
    lname,
    age,
    username,
    password,
  };

  if (userData !== null && userData.length) {
    userData = JSON.parse(userData);
    userData.push(person);
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    userData = [];
    userData.push(person);

    localStorage.setItem("userData", JSON.stringify(userData));
  }
  window.location.href = "authorization.html";
}

function authorization() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let users = localStorage.getItem("userData");

  if (users) {
    users = JSON.parse(users);

    let foundUser;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        foundUser = users[i];
        break;
      }
    }

    if (foundUser) {
      alert("Authentication successful");

      window.location.href = "index.html";
    } else {
      alert("Authentication failed. Invalid username or password.");
      
    }
  } else {
    alert("No user data found. Please register.");
  }
}

function registrationPage() {
  window.location.href = "registration.html";
}

function authorizationPage() {
  window.location.href = "authorization.html";
}

function logOut() {
  window.location.href = "authorization.html";
}
