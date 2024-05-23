// Select HTML elements by their class
const left = document.querySelector(".left"); // Selects the left arrow button
const right = document.querySelector(".right"); // Selects the right arrow button
const slider = document.querySelector(".slider"); // Selects the slider container
const images = document.querySelectorAll(".image"); // Selects all images
const bottom = document.querySelector(".bottom"); // Selects the bottom container for buttons

let slideNumber = 1; // Sets the default slide number
const length = images.length; // Gets the total number of images

// Creates buttons for each slide
for (let i = 0; i < length; i++) {
    const div = document.createElement("div"); // Creates a new div element
    div.className = "button"; // Adds the button class to the new div
    bottom.appendChild(div); // Appends the new div to the bottom container
}

const buttons = document.querySelectorAll(".button"); // Selects all buttons
buttons[0].style.backgroundColor = "#f34863"; // Sets the background color of the first button

// Function to reset the background color of all buttons
const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"; // Sets the background color of all buttons to transparent
    });
};

// Adds click event listener to each button
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg(); // Resets the background color of all buttons
        slider.style.transform = `translateX(-${i * 800}px)`; // Moves the slider to the corresponding image
        slideNumber = i + 1; // Updates the current slide number
        button.style.backgroundColor = "#f34863"; // Sets the background color of the active button
    });
});

// Function to move to the next slide
const nextSlide = () => {
    if (slideNumber < length) { // If the current slide is not the last one
        slider.style.transform = `translateX(-${slideNumber * 800}px)`; // Moves the slider to the next image
        slideNumber++; // Increases the slide number
    } else { // If the current slide is the last one
        slider.style.transform = `translateX(0px)`; // Moves the slider back to the first image
        slideNumber = 1; // Resets the slide number to 1
    }
    changeColor(); // Changes the color of the buttons
};

// Function to move to the previous slide
const prevSlide = () => {
    if (slideNumber > 1) { // If the current slide is not the first one
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`; // Moves the slider to the previous image
        slideNumber--; // Decreases the slide number
    } else { // If the current slide is the first one
        slider.style.transform = `translateX(-${(length - 1) * 800}px)`; // Moves the slider to the last image
        slideNumber = length; // Sets the slide number to the last one
    }
    changeColor(); // Changes the color of the buttons
};

// Function to change the button colors based on the current slide
const changeColor = () => {
    resetBg(); // Resets the background color of all buttons
    buttons[slideNumber - 1].style.backgroundColor = "#f34863"; // Sets the background color of the current button
};

// Adds click event listener to the right arrow
right.addEventListener("click", nextSlide);

// Adds click event listener to the left arrow
left.addEventListener("click", prevSlide);
