const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".close");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}
