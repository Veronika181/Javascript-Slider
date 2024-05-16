const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")

right.addEventListener("click", () => {
    slider.style.transform = 'translateX(-800px)'
})
