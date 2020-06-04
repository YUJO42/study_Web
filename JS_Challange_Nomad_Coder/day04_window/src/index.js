// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const text = document.querySelector("h2");
text.style.color = "white";

const body = document.querySelector("body");
body.style.backgroundColor = "#4996f4"; // blue

function windowWidthChange() {
  // console.log(window.innerWidth); // check window size
  if (window.innerWidth > 1600) {
    body.style.backgroundColor = "#eded40"; // yellow
  } else if (window.innerWidth > 1200) {
    body.style.backgroundColor = "#c935ea"; // purple
  } else if (window.innerWidth > 800) {
    body.style.backgroundColor = "#4996f4"; // blue
  }
}
window.addEventListener("resize", windowWidthChange);
