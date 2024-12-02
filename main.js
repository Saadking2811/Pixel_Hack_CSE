const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".close");
menuIcon.addEventListener("click", () => {
  navbar.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  navbar.classList.remove("active");
});
