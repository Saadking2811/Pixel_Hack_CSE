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
