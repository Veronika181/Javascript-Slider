const left = document.querySelector(".left")
const right = document.querySelector(".right");;
const slider = document.querySelector(".slider");
const images = document.querySelector(".image");

let slideNumber = 1;


right.addEventListener("click", () => {
    slider.style.transform = 'translateX(-${slideNumber * 800}px)';
    slideNumber++;
});

