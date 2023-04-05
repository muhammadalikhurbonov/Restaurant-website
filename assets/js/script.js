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
    document.querySelector(".body").style.background = "white";
    Form.classList.add("animation_time_off");
    document.querySelector(".dropdown-content").style.display = "block";
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
function barscontent() {
  document.getElementById("bars_content_ul").style.display = "block";
  document.querySelector(".fa-solid fa-bars").style.display = "none";
  document.querySelector(".bars_content").style.display = "none";
}

const btn_left = document.querySelector(".carousel_buttons_left");
const btn_right = document.querySelector(".carousel_buttons_right");
const imges = document.querySelectorAll(".section_one_item_child_carusel  img");
const Imglegth = imges.legth - 1;
let position = 0;

function RemoveAllClasses() {
  for (const img of imges) {
    img.classList.remove("opacity");
  }
}
const leftMove = () => {
  RemoveAllClasses();
  if (position === Imglegth) {
    position = 0;
  } else {
    position++;
  }
  imges[position].classList.add("opacity");
};

const rightMove = () => {
  RemoveAllClasses();
  if (position === 0) {
    position = Imglegth;
  } else {
    position--;
  }
  imges[position].classList.add("opacity");
};

btn_left.addEventListener("click", rightMove);
btn_right.addEventListener("click", leftMove);
