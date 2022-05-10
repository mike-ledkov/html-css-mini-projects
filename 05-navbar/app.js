const navBar = document.querySelector(".navbar")
const navBtn = document.querySelector(".nav-button")

navBtn.addEventListener("click", showNav)

function showNav() {
  navBar.classList.toggle("show-nav")
}