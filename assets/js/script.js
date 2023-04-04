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
    document.getElementById("login").innerHTML = username.value;
    Form.classList.add("animation_time_off");
    document.querySelector(".dropdown-content").style.display = "block";
    document.cookie = username.value;
    window.localStorage.setItem("Username", username.value);
    window.localStorage.setItem("Password", password.value);
  });
}
// Login.innerHTML = window.localStorage.getItem("Username");
function logOut() {
  Login.innerHTML = "Log In";
  window.localStorage.clear();
  document.querySelector(".dropdown-content").style.display = "none";
  document.querySelector(".body").style.background = "white";
}
function ExitFunction() {
  Form.classList.remove("animation_time");
  Exit.classList.add("exit_on");
}
