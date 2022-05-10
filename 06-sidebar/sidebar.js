const sideBar = document.querySelector("aside")
const closeBtn = document.querySelector(".close-btn")
const toggle = document.querySelector(".sidebar-toggle")

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar")
})

toggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar")
})