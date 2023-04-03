const Form = document.querySelector(".form");
const Exit = document.querySelector(".exit_form");
const inp = document.getElementById("username");
const Login = document.getElementById("login");

function clickFunction() {
  Form.classList.add("animation_time");
  Exit.classList.add("exit_on");
  document.querySelector(".body").style.background = "black";
  document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login").innerHTML = inp.value;
    Form.classList.add("animation_time_off");
    document.querySelector(".dropdown-content").style.display = "block";
    document.cookie = inp.value;
    window.localStorage.setItem("Name", inp.value);
  });
}
// Login.innerHTML = window.localStorage.getItem("Name");
function logOut() {
  Login.innerHTML = "Sign In";
  window.localStorage.clear();
  document.querySelector(".dropdown-content").style.display = "none";
  document.querySelector(".body").style.background = "white";
}
function ExitFunction() {
  Form.classList.remove("animation_time");
  Exit.classList.add("exit_on");
}
