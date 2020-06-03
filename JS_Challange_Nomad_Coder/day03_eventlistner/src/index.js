// // <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// // <⚠️ /DONT DELETE THIS ⚠️>

// /*
// ✅ The text of the title should change when the mouse is on top of it.
// ✅ The text of the title should change when the mouse is leaves it.
// ✅ When the window is resized the title should change.
// ✅ On right click the title should also change.
// ✅ The colors of the title should come from a color from the colors array.
// ✅ DO NOT CHANGE .css, or .html files.
// ✅ ALL function handlers should be INSIDE of "superEventHandler"
// */

// 마우스가 제목 텍스트 위에 있을 때 변경  -> The mouse is here!
// 마우스가 제목 텍스트를 떠날 때 변경    -> The mouse is gone!
// 창 크기가 조정되면 제목 변경          -> You just resized!
// 오른쪽 클릭시 제목 변경              -> That was a right click!

// .css .html 변경 금지
// 모든 기능 핸들러는 superEventHandler = {}

const text = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function handleMouseEnter() {
    text.innerHTML = "The mouse is here!";
    text.style.color = colors[0];
  },
  handleMouseOut: function handleMouseOut() {
    text.innerHTML = "The mouse is gone!";
    text.style.color = colors[1];
  },
  handleWindowResize: function handleWindowResize() {
    text.innerHTML = "You just resized!";
    text.style.color = colors[2];
  },
  handleRightClick: function handleRightClick() {
    text.innerHTML = "That was a right click!";
    text.style.color = colors[3];
  },
};

text.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
text.addEventListener("mouseout", superEventHandler.handleMouseOut);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
