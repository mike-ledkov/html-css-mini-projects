const overlay = document.querySelector(".modal-overlay")
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", () => {
  overlay.classList.add("show-modal")
})

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show-modal")
})
