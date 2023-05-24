const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const exit = document.querySelector(".close");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);
exit.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  exit.classList.toggle("active");
  body.classList.toggle("active");
}
