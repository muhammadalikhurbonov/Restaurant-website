const Box = document.querySelector(".animation_box");
const Animation = document.querySelector(".animation");
const Exit = document.querySelector(".exit_on");

function clickFunction() {
  Box.classList.add("Animation");
  Box.classList.add("Exit");
}
function ExitFunction() {
  Box.classList.remove("Animation");
}
