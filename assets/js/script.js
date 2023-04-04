const Form = document.querySelector(".form");
const Exit = document.querySelector(".exit_form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const Login = document.getElementById("login");

function clickFunction() {
  Form.classList.add("animation_time");
  Exit.classList.add("exit_on");
  document.querySelector(".body").style.background = "black";
  document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();
    Form.classList.add("animation_time_off");
    document.querySelector(".dropdown-content").style.display = "block";
    // document.cookie = `Username=${username.value}`;
    // document.cookie = `Password=${password.value}`;
    localStorage.setItem("Username", username.value);
    localStorage.setItem("Password", password.value);
    Login.innerHTML = localStorage.getItem("Username");
  });
}
if (localStorage.getItem("Username")) {
  Login.innerHTML = localStorage.getItem("Username");
}
function logOut() {
  window.localStorage.clear();
  document.querySelector(".dropdown-content").style.display = "none";
  document.querySelector(".body").style.background = "white";
  if (localStorage.getItem("Username")) {
    Login.innerHTML = localStorage.getItem("Username");
  } else {
    Login.innerHTML = "Log In";
  }
}
function ExitFunction() {
  Form.classList.remove("animation_time");
  Exit.classList.add("exit_on");
}
