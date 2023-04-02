const Animation_Box = document.querySelector(".animation_box");
const Animation_Time = document.querySelector(".animation_time");
const Exit = document.querySelector(".exit_on");
const Form = document.getElementsByClassName("form");

function clickFunction() {
  Form.classList.add("Animation_Time");
  Form.classList.add("Exit");
}
function ExitFunction() {
  Form.classList.remove("Animation_Time");
}
